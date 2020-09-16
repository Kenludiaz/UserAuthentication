const express = require('express');
const app = express();
const users = require('./route/users.route');
const mongoose = require('mongoose');
const userRoute = require("./route/users.route");

if (!config.get("myprivatekey")) {
    console.error("Fatal error: myprivatekey is not defined.");
    process.exit(1);
}

app.use(express.json());
app.use("/api/users", userRoute);




// ========Database========
let mongoDB = 'mongodb+srv://Ken:cheese11@cluster0.lcalo.mongodb.net/userAuthentication?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;