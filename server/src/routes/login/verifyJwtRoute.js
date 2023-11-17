const {Router} = require('express')
const verifyJwtHandler = require('../../handlers/login/verifyJwtHandler')
const checkToken = require('../../middlewares/checkToken')

const verifyJwtRoute = Router()

verifyJwtRoute.post('/verify', checkToken, verifyJwtHandler)

module.exports = verifyJwtRoute