const Joi = require('joi')
const validateRequest = require('../auth/validateRequest');

/**
 * Register a new user Schema
 * @params req, res, next
 */
exports.registerUserSchema = (req, res, next) => {
  const SCHEMA = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(8).pattern(new RegExp('^[a-zA-Z0-9(),-_., ]{8,30}$')).required()
  })
  validateRequest(req, next, SCHEMA)
}

/**
 * Authenticate a user Schema
 * @params req, res, next
 */
exports.authenticateUserSchema = (req, res, next) => {
  const SCHEMA = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
  })
  validateRequest(req, next, SCHEMA)
}
