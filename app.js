const express = require('express');
const app = express();
const users = require('./route/users.route');

app.use('/', users);

module.exports = app;