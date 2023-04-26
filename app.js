const express = require("express");
const router = require("./router");
const app = express();

app.use(express.json());

// http://localhost:3000/
app.use("/api", router)

module.exports = app;