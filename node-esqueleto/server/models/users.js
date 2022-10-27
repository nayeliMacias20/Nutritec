const express = require('express')
const routes = express.Router()
const { Schema } = express;

const UserSchema = new Schema({
    nombre: { type: String, required: true },
    pass: { type : String, required: true },
    correo: { type : String, required: true },
    tipo: { type : Number, required: true },

});

module.exports = express.model('Users', UserSchema);
