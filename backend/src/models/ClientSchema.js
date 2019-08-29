const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String
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

module.exports = mongoose.model("Client", ClientSchema);
