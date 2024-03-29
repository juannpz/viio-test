const { User } = require('../../db');
const { compareData } = require('../../middlewares/dataCrypt');
const generateToken = require('../../middlewares/generateToken')

const loginController = async ({ email, password }) => {
  //busca al usuario en la base de datos. Si no lo encuentra devuelve null
  const user = await User.findOne({ where: {email} })

  if (!user) return null
  else {
    //compara el hash de la contraseña recibida con el hash de la contraseña guardada en la db
    const match = await compareData(password, user.password)

    //si ambos hash coinciden genera el JWT y devuelve los datos de usuario junto con el token
    if (match) {
      const userData = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }
      const token = generateToken(userData)
      return {
        userData,
        token
      }
    } else return null
  }
}

module.exports = loginController
