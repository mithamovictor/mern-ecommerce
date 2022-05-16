const schemaMiddleware = require('../middleware/schema.middleware')
const authController = require('../controllers/auth.controller')
const tokenVerify = require('../auth/verifyToken')

exports.routesConfig = app => {
  app.post('/api/register', [
    schemaMiddleware.registerUserSchema,
    authController.register
  ])
  app.post('/api/auth', [
    schemaMiddleware.authenticateUserSchema,
    authController.authenticate
  ])
  app.post('/api/refreshToken', [
    authController.refreshToken
  ])
  app.post('/api/passwordResetToken', [
    // schemaMiddleware.passwordResetTokenSchema,
    // authController.createPasswordToken
  ])
  app.post('/api/resetPassword', [
    // authController.authorize,
    // authController.resetPassword
  ])
  app.get('/api/verifyToken', [
    authController.authorize,
    tokenVerify.verifyToken
  ])
}
