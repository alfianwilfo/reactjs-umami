const express = require("express");
const app = express();
const port = 3000;
let user = require("./user");

app.use("/users");

module.exports = app;
