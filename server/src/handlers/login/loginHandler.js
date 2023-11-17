const loginController = require("../../controllers/login/loginController");

const loginHandler = async (req, res) => {
  const formData = req.body;
  const {email, password} = formData

  try {
    const result = await loginController({ email, password });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(401).json({ error: "Incorrect email or password. Try again" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = loginHandler;
