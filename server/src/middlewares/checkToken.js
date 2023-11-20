const jwt = require('jsonwebtoken')
require('dotenv').config()

function checkToken(req, res, next) {
    const key = process.env.JWT_SECRET_KEY || "default"
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // si no hay token, devuelve un error

    jwt.verify(token, key, (err, user) => {
        if (err) return res.sendStatus(403) // si el token no es válido, devuelve un error
        req.user = user
        next() // pasa al siguiente middleware
    })
}

module.exports = checkToken;
