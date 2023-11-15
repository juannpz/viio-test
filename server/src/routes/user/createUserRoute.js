const { Router } = require('express');
const createUserHandler = require('../../handlers/user/createUserHandler');

const createUserRoute = Router();

createUserRoute.post('/register', createUserHandler);

module.exports = createUserRoute;
