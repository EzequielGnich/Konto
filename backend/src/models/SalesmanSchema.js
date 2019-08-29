const mongoose = require("mongoose");

const SalesmanSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  lastname: {
    type: String,
    lowercase: true,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  DDD: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Salesman", SalesmanSchema);
