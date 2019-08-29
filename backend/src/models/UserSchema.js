const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: false,
    uppercase: true
  },
  salesman: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Salesman",
    required: false
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: false
  }
});

module.exports = mongoose.model("User", UserSchema);
