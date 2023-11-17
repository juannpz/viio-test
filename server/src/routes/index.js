const { Router } = require("express");
const login = require('./login/loginRoute')
const createUser = require('./user/createUserRoute')
const getProducts = require('./products/getProductsRoute')
const verifyJwt = require('./login/verifyJwtRoute')

const routes = Router();

module.exports = () => {
  routes.use("/", login)
  routes.use("/", createUser)
  routes.use("/", getProducts)
  routes.use("/", verifyJwt)

  return routes;
};