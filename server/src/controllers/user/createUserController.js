// controllers/register/registerController.js
const { User } = require('../../db');
const { encryptData } = require('../../middlewares/dataCrypt');

const createUserController = async ({ firstName, lastName, email, password }) => {
  const existingUser = await User.findOne({ where: {email} })
  if (existingUser) {
    throw new Error('Email already registered.');
  }

  const hashedPassword = await encryptData(password)

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  })

  return newUser
};

module.exports = createUserController
