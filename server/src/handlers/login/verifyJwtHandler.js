const verifyJwtController = require("../../controllers/login/verifyJwtController");

const verifyJwtHandler = async (req, res) => {

    try {
        const result = await verifyJwtController()
        if (result) res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = verifyJwtHandler
