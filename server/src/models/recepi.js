const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const _ = require('lodash')
const config = require('config')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const joiValidator = require('../middleware/joiValidator')
const createUploader = require("../utils/multer");
const cloudinary = require("../utils/cloudinary");

const recepiSchema = mongoose.Schema({
    strMeal: {
        type: String,
        required: true,
        unique: true,
    },
    strCategory: {
        type: String,
        required: true,
    },
    strArea: {
        type: String,
        required: true,
    },
    strInstructions: {
        type: String,
        required: true,
        unique: true,
    },
    strMealThumb: {
        type: String,
        required: true,
        unique: true,
    },
    strYoutube: {
        type: String,
        required: true,
        unique: true,
    },
    strIngredient: {
        type: Array,
        required: true,
    },
    cloudinaryId: {
        type: String,
        required: true,
    },
})

const Recepi = mongoose.model('Recepi', recepiSchema)

const removeImage = (cloudinaryId) => {
    return cloudinary.uploader.destroy(cloudinaryId, { invalidate: true })
}

const reqSchema = Joi.object({
    name: Joi.string()
      .required()
      .messages({ "any.required": `El campo "name" es requerido` }),
  
    price: Joi.number()
      .required()
      .messages({ "any.required": `El campo "price" es requerido` }),
    categoryId: Joi.objectId().required().messages({
      "any.required": `El campo "categoryId" es requerido`,
      "string.pattern.name": `El campo "categoryId" debe ser un objectId valido para mongo`,
    }),
    file: Joi.object().required().messages({
      "any.required": `El campo "image" es requerido`,
    }),
  });

console.log(mongoose.Schema);