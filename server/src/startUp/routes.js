require("express-async-errors");
const register = require("../routes/register");
const logIn = require("../routes/logIn")
const deleteUser = require('../routes/deleteUser')
const likes = require("../routes/likes")
const errors = require("../middleware/errors");
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");

module.exports = function (app) {
  app.use(express.json());
  app.use(helmet());
  app.use(compression());
  app.use(errors);

  app.use("/registerform", register);
  app.use("/login", logIn);
  app.use("/deleteuser", deleteUser);
  app.use("/likes", likes);

};