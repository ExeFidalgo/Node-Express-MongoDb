const registroModel = require("../models/registroModel");

module.exports = {
  create: async function (req, res, next) {
    try {
      console.log(req.body);
      const registro = new registroModel(req.body);
      const document = await registro.save();
      res.status(201).json(document);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
};
