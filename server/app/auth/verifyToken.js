exports.verifyToken = (req, res, next) => {
  return res.status(200).json({
    message: 'Authorized'
  })
}
