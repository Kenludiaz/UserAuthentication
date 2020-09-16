const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const config = require('config')


let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    password: {type: String, required: [true, "Please enter a valid username or password."], minlength: 3, maxlength: 255},
    email: {type: String, required: [true, "Please enter a valid username or password."], minlength: 5, maxlength: 255, unique: true},

    isAdmin: Boolean
});

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin }, config.get('myprivatekey'))
    return token;
}

const User = mongoose.model('User', UserSchema);

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(3).max(255).required()
    };

    return Joi.validate(user, schema);
}



exports.User = User;
exports.validate = validateUser;