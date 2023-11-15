const {Router} = require('express')
const loginHandler = require('../../handlers/login/loginHandler')

const loginRoute = Router()

loginRoute.post('/login', loginHandler)

module.exports = loginRoute