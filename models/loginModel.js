const mongoose = require("../config/mongodb");

const loginSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "El campo email es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "El campo password es obligatorio"],
  },
});

module.exports = mongoose.model("Login", loginSchema);
