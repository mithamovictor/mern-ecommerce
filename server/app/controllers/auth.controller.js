const usersService = require('../services/users.service')

/**
 * Register a new User
 * @params req, res, next
 */
exports.register = (req, res, next) => {
  return usersService.create(req.body)
    .then(user=>{
      if(user.keyValue?.username) return res.status(403).json({ message: 'Username already registered.' })
      if(user.keyValue?.email) return res.status(403).json({ message: 'Email already registered.' })
      return res.status(201).json({ message: 'User registered successfully.', user })
    }).catch(next)
}


/**
 * Authenticate User
 * @params req, res, next
 */
exports.authenticate = (req, res, next) => {
  return usersService.authenticate(req.body)
    .then(result=>{
      return res.status(200).json(result)
    }).catch(next)
}

/**
 * Authorize user
 */
exports.authorize = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  try {
    usersService.authorize(token)
      .then(response=>{
        if(!response || !response._id)
          return res.status(401).json({ message: 'Unauthorized' })
        req.user = response
        return next()
      }).catch(next)
  } catch (error) {
    res.status(401).json(error)
  }
}

exports.refreshToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  try {
    usersService.refreshToken(token)
      .then(response=>{
        return res.status(200).json(response)
      }).catch(next)
  } catch (error) {
    res.status(401).json(error)
  }
}
