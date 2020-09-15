let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema ({
    username: {type: String, required: [true, "Please enter a valid username or password."]},
    password: {type: String, required: [true, "Please enter a valid username or password."]},
    age: {type: Number, min: 16},
    full_name: {type: String},
    email: {type: String}
});

module.exports = mongoose.model('UserModel', UserSchema);
