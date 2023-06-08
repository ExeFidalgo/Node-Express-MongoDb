const express = require('express');
const router = express.Router();
const registroController = require("../controllers/registroController");

router.post('/', registroController.create);

module.exports = router;
