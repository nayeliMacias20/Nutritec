const venta = require('../models/ventas');
const VentaCtrl = {};

VentaCtrl.getVentas = async (req, res) => {
    const ventas = await venta.find();
    res.json(ventas);
};

VentaCtrl.createVenta = async (req,res) => {
    const newVenta = new venta({
        clave: req.body.clave,
        color: req.body.color,
        talla : req.body.talla,
        numtarjeta: req.body.numtarjeta,
        nombrec: req.body.nombrec,
        domicilio: req.body.domicilio,
        cantidad: req.body.cantidad
    });
    console.log(newVenta)

    await newVenta.save();
    console.log(req.body);
    res.json({
       'status' : 'Venta Exitosa'
    });
}
module.exports = VentaCtrl;