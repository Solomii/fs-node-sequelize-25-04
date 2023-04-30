const express = require("express");
const router = require("./routes");
const app = express();

app.use(express.json());

// http://localhost:3000/
app.use("/api", router);

app.use((err, req, res, next) => {
    console.log("err =====>>>>> ", err);
    const status = err.status || 500;
    res.status(status).send({
        error: [{ message: err.message || "Server Error" }],
    });
});

module.exports = app;
