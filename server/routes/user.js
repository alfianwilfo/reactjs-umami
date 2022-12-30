const express = require("express");
const app = express();
const port = 3000;
let UserController = require("../controllers/userController");

app.use("/register", UserController.register);

module.exports = app;
