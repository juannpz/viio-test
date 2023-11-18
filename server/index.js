const server = require("./src/app.js")
const { conn } = require("./src/db.js")
// require("dotenv").config();
// const { PORT } = process.env
const PORT = 3000

server.listen(PORT, async () => {
  await conn.sync({ force: false, alter: false })
  console.log(`server listening at ${PORT}`)
})