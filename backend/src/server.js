const express = require("express");
const app = express();
const mongoose = require("mongoose");

const router = require("./routes");
const mongo = "mongodb://localhost:27017/Konto";
mongoose.Promise = global.Promise;

app.use(express.json());

app.use(router);

mongoose.connect(mongo, {
  useNewUrlParser: true
});

app.listen(3000, console.log("Running"));
