const express = require('express')
const routes = express.Router()
const { Schema } = express;

const DietsSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  kcal: { type: Number, required: true },
  count: { type: Number, required: true }

});

module.exports = express.model('Diets', DietsSchema);
