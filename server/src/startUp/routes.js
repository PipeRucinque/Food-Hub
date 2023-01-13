require("express-async-errors");
const users = require("../routes/users");
const errors = require("../middleware/errors");
const helmet = require("helmet");
const compression = require("compression");
const express = require("express");
//const auths = require("../routes/auths");

module.exports = function (app) {
  app.use(express.json());
  app.use(helmet());
  app.use(compression());
  app.use(errors);
  //app.use("/auths", auths);
  
  app.use("/registerform", users);

};