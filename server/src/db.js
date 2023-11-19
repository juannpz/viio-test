require("dotenv").config()
const { Sequelize } = require('sequelize')
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env
const UserModel = require("./models/User")
const ProductModel = require("./models/Product")

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {
        logging: false,
        native: false,
    }
)

UserModel(sequelize)
ProductModel(sequelize)

const { User, Product } = sequelize.models

module.exports = {
    User,
    Product,
    conn: sequelize,
}
