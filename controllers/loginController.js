const loginModel = require("../models/loginModel");
const jwt = require('jsonwebtoken');

module.exports = {
  login: async function (req, res, next) {
    try {
      console.log(req.body);
      const { email, password } = req.body;

      // Lógica para validar el usuario y generar el token JWT
      const user = await loginModel.findOne({ email });

      if (!user) {
        return res.status(401).json({ message: 'Usuario no encontrado' });
      }

      if (password !== user.password) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
      }

      const token = jwt.sign({ userId: user._id }, 'secretKey');
      res.status(200).json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
};
