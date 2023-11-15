const jwt = require('jsonwebtoken');
require('dotenv').config();

function checkToken(req, res, next) {
    const secretKey = process.env.SECRET_KEY || "default";
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log('Received Token:', token);
    if (token == null) return res.sendStatus(401) // si no hay token, devuelve un error

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // si el token no es válido, devuelve un error
        req.user = user;
        next(); // pasa al siguiente middleware
    });
}

module.exports = checkToken;
