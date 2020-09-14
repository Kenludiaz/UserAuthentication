let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema {
    username: {type: String},
    password: {type: String},
    age: {type: String},
    fullname: {type: String},
    email: {type: String}
};

