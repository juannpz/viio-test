const jwt = require('jsonwebtoken');
require('dotenv').config()

function generateToken(data) {
  const key = process.env.JWT_SECRET_KEY || "default"
  const token = jwt.sign({ data: data }, key, { expiresIn: '1h' })
  return token
}

module.exports = generateToken;