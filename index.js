const express = require('express');
const router = express.Router();
const app = express();
const users = require('./route/users.route')

app.use(users, "/");

app.listen(3000, () => {
    console.log("App displayed in Port 3000");
})