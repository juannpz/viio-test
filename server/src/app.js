const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");

const server = express()
server.use(
  cors({
    origin: "*", // Permitir cualquier origen durante el desarrollo
    methods: "GET, POST, OPTIONS, PATCH, PUT, DELETE",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  })
);
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", routes());

module.exports = server;