const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentasSchema = new Schema({
    clave: { type: Number, required: true },
    color: { type : String, required: true },
    talla: { type : String, required: true },
    numtarjeta:{ type : Number, required: true},
    nombrec:{ type : String, required: true},
    domicilio:{ type : String, required: true},
    cantidad:{ type : Number, required: true }

});

module.exports = mongoose.model('ventas', VentasSchema);