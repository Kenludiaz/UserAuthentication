var express = require('express');
var router = express.Router();
const path = require('path');


router.get('/', (req, res) => {
    res.sendFile("index.html", { root: path.dirname(__dirname)} );
});

module.exports = router;