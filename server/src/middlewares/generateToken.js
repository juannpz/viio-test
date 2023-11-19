const jwt = require('jsonwebtoken');
require('dotenv').config()

function generateToken(data) {
  const secretKey = process.env.SECRET_KEY || "default"
  const token = jwt.sign({ data: data }, secretKey, { expiresIn: '1h' })
  return token
}

module.exports = generateToken;