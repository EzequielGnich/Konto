const express = require("express");
const app = express();
require("dotenv").config();

const port = global.process.env.PORT || 3000;

app.get("/login", (req, res) => {
    res.status(200).send("<h1>Login</h1>");
});

app.listen(port, console.log(`Backend is running on port ${port}`));
