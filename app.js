const express = require('express');
const app = express();
const users = require('./route/users.route');
const mongoose = require('mongoose');


// ========Middleware========
app.use('/', users);




// ========Database========
let mongoDB = 'mongodb+srv://Ken:cheese11@cluster0.lcalo.mongodb.net/userAuthentication?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;