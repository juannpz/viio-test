const { Router } = require("express");
const login = require('./login/loginRoute')
const createUser = require('./user/createUserRoute')
const getProducts = require('./products/getProductsRoute')

const routes = Router();

module.exports = () => {
  routes.use("/", login)
  routes.use("/", createUser)
  routes.use("/", getProducts)

  return routes;
};