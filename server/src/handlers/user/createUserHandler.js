// handlers/register/registerHandler.js
const createUserController = require('../../controllers/user/createUserController')

const createUserHandler = async (req, res) => {
  const formData = req.body;
  const {firstName, lastName, email, password} = formData
  try {
    const newUser = await createUserController({ firstName, lastName, email, password })
    res.status(201).json({
      id: newUser.id,
      name: newUser.firstName,
      lastname: newUser.lastName,
      email: newUser.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

module.exports = createUserHandler;
