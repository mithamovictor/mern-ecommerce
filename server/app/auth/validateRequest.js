const validateRequest = (req, next, schema) => {
  const OPTIONS = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
  }
  const {error, value} = schema.validate(req.body, OPTIONS)
  if (error)
    return next(`Validation error: ${error.details.map(x=>x.message).join(', ')}`)
  req.body = value
  return next()
}

module.exports = validateRequest;
