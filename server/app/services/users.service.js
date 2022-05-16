require('dotenv').config()
const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')
const bcrypt = require('bcrypt')
const Users = require('../../db/models/users.model');
const SECRET = process.env.SECRET
const tokenList = {}

/**
 * Authenticate user
 * @param { username, password } credentials
 * @returns token and refreshToken
 */
const authenticate = async ({ username, password }) => {
  const users =  await Users.find({ username }).lean()
  return users.map(user=>{
    if(!user) return 'User does not exist!'
    if(user && !(bcrypt.compare(password, user.hash))) return 'Invalid password!'
    const newUser = { ...user, _id: user._id.toString() }
    const token = jwt.sign({ sub: omitHash(newUser) }, SECRET, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ _id: newUser._id }, SECRET, { expiresIn: '1.5h' })
    const result = { token, refreshToken }
    tokenList[refreshToken] = result
    return result
  })
}

/**
 * Authorize user
 * @param {*} token
 * @returns user
 */
const authorize = async token => {
  jwt.verify(token, SECRET)
  const user = jwt_decode(token, SECRET)
  return await Users.findById(user.sub._id)
    .then(result=>{
      const userData = { ...result._doc, _id: result._doc._id.toString() }
      return omitHash(userData);
    }).catch(err=>{
      return err
    })
}

/**
 * Generate a new token set
 * @param {*} data
 * @returns token and refreshToken
 */
const refreshToken = async data => {
  const _id = jwt_decode(data, SECRET)._id
  const users =  await Users.findById(_id).lean()
  const newUser = { ...users, _id: users._id.toString() }
  const token = jwt.sign({ sub: omitHash(newUser) }, SECRET, { expiresIn: '1h' })
  const refreshToken = jwt.sign({ _id }, SECRET, { expiresIn: '1.5h' })
  const result = { token, refreshToken }
  tokenList[refreshToken] = result
  return result
}

/**
 * Create a new user
 * @param { firstname, lastname, email, username, hash } user
 * @returns new user
 */
const create = async ({ firstname, lastname, email, username, password }) => {
  const hash = await bcrypt.hash(password, 10)
  const newData = { firstname, lastname, email, username, hash }
  return await Users.create(newData)
    .then(user=>{
      const data = {...user._doc, _id: user._doc._id.toString()}
      return omitHash(data)
    }).catch(err=>{
      return err
    })
}

/**
 * Delete user
 * @param {*} id
 * @returns deteled user
 */
const _delete = async id => {
  return await Users.findByIdAndDelete(id)
}

/**
 * Remove hash from user object
 * @param {*} user
 * @returns user object without hash
 */
const omitHash = user => {
  const { hash, ...userWithoutHash } = user
  return userWithoutHash
}

module.exports = {
  authenticate,
  authorize,
  refreshToken,
  create,
  delete: _delete
}
