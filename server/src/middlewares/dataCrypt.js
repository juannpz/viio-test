const bcrypt = require('bcrypt')

//devuelve el hash del string recibido por parámetro, utilizando el salt especificado
async function encryptData(data) {
  const hash = await bcrypt.hash(data, 10)
  return hash
}

//hashea temporalmente el string recibido como primer parámetro para compararlo con el hash recibido en el segundo parámetro. Devuelve true o false en función de esa comparación
async function compareData(data, hash) {
  const match = await bcrypt.compare(data, hash)
  return match
}

module.exports = {
    encryptData,
    compareData
}
