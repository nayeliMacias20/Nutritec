const product = require('../models/products');
const ProductCtrl = {};


ProductCtrl.getProducts = async (req, res) => {
    const products = await product.find();
    res.json(products);
};

ProductCtrl.createProduct = async (req,res) => {
    const newPro = new product({
        Clave: req.body.Clave,
        Tipo: req.body.Tipo,
        Marca: req.body.Marca,
        Color : req.body.Color,
        Talla: req.body.Talla,
        Precio: req.body.Precio,
        Cantidad: req.body.Cantidad,
    });
    console.log(newPro)

    await newPro.save();
    console.log(req.body);
    res.json({
       'status' : 'Producto Guardado'
    });
    
};
/*userCtrl.getUser = async (req,res) => {
    const find = await user.findById(req.params.id);
    res.json(find);
};

userCtrl.editEmployee = async (req,res) => {
    const { id } = req.params;
    const newUsr = {
        name : req.body.name,
        role : req.body.role,
        password : req.body.password,
        user: req.body.user
    }
    //(id, objeto nuevo, si no existe, crealo)
    await user.findByIdAndUpdate(id, {$set: newUsr}, {new:true});
    res.json({
        status: 'Employee update'
    });
};
*/
ProductCtrl.deleteProduct = async (req,res) => {
    await user.findByIdAndRemove(req.params.Clave);
    res.json({
        status: 'Producto Borrado'
    });
};

module.exports = ProductCtrl;