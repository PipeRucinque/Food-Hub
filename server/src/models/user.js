const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const _ = require("lodash");
const validator = require("../middleware/joiValidator");

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
})

userSchema.methods.generateToken = function () {
  return jwt.sign(
    _.pick(this, ["_id", "userName"]),
    config.get("jwtPrivateKey")
  );
};

const User = mongoose.model("User", userSchema);

const reqSchema = Joi.object({
    userName: Joi.string(),
    email: Joi.string()
        .email()
        .required()
        .messages({ "any.required": `El campo "email" es requerido` }),
    password: Joi.string()
        .required()
        .messages({ "any.required": `El campo "password" es requerido` }),
})

exports.User = User;
exports.validateBody = validator(reqSchema)