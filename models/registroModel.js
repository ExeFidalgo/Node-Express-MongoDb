const mongoose = require("../config/mongodb");

const registroSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "El campo email es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "El campo password es obligatorio"],
  },
  nombre: {
    type: String,
    required: [true, "El campo nombre es obligatorio"],
  },
  apellido: {
    type: String,
    required: [true, "El campo apellido es obligatorio"],
  },
});

module.exports = mongoose.model("Registro", registroSchema);
