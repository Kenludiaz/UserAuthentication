var express = require('express');
var router = express.Router();
const path = require('path');
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user");
const { equal } = require('joi');
const router = express.Router();


router.get('/current', auth, (req, res) => {
    // throw new Error("Broken");
    const user = await User.findById(req.user.id).select("-password");
    res.send(user);
});

router.post("/", async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registed.");

    user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });
    user.password = await bcrypt.hash(user.password, 10);
    await user.save();

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
        _id: user._,
        name: user.name,
        email: user.email
    });
});

module.exports = router;