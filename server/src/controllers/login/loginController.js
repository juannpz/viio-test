const { User } = require('../../db');
const { compareData } = require('../../middlewares/dataCrypt');
const generateToken = require('../../middlewares/generateToken')

const loginController = async ({ formData }) => {
console.log(formData);
  //busca al usuario en la base de datos. Si no lo encuentra devuelve null.
  const user = await User.findOne({ where: {email: formData.email} });

  if (!user) return null
  else {
    //compara el hash de la contraseña recibida con el hash de la contraseña guardada en la db
    const match = await compareData(formData.password, user.password);

    //si ambos hash coinciden genera el JWT para incluirlo en la respuesta y devuelve los datos de usuario junto con el token
    if (match) {
      const userData = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email
      }
      const token = generateToken(userData)
      return {
        userData,
        token
      }
    } else return null
  }
};

module.exports = loginController;
