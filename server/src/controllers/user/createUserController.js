// controllers/register/registerController.js
const { User } = require('../../db');
const { encryptData } = require('../../middlewares/dataCrypt');

const createUserController = async ({ name, lastname, email, password }) => {
  // Verifica si el correo electrónico ya está registrado.
  const existingUser = await User.findOne({ where: { email } })
  if (existingUser) {
    throw new Error('Email already registered.');
  }

  // Cifra la contraseña antes de guardarla en la base de datos.
  const hashedPassword = await encryptData(password)

  // Crea un nuevo usuario en la base de datos.
  const newUser = await User.create({
    name,
    lastname,
    email,
    password: hashedPassword,
  })

  return newUser
};

module.exports = createUserController
