// handlers/register/registerHandler.js
const createUserController = require('../../controllers/user/createUserController');

const createUserHandler = async (req, res) => {
  const { name, lastname, email, password } = req.body;

  try {
    const newUser = await createUserController({ name, lastname, email, password });
    res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      lastname: newUser.lastname,
      email: newUser.email,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createUserHandler;
