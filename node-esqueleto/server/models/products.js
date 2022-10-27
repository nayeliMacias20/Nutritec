const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    Clave: { type: Number, required: true },
    Tipo: { type: String, required: true },
    Marca: { type : String, required: true },
    Color: { type : String, required: true },
    Talla: { type : String, required: true },
    Precio: { type : Number, required: true },
    Cantidad:{ type : Number, required: true }

});

module.exports = mongoose.model('Products', ProductSchema);