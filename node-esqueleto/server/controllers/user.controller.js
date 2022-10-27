const user = require('../models/users');
const userCtrl = {};


userCtrl.getUsers = async (req, res) => {
    const users = await user.find();
    res.json(users);
};

userCtrl.createUser = async (req,res) => {
    const newUsr = new user({
        nombre: req.body.nombre,
        pass: req.body.pass,
        correo : req.body.correo,
        tipo: req.body.tipo
    });
    console.log(newUsr)

    await newUsr.save();
    console.log(req.body);
    res.json({
       'status' : 'User saved'
    });
    
};

userCtrl.getUser = async (req,res) => {
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

userCtrl.deleteEmployee = async (req,res) => {
    await user.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employee deleted'
    });
};

module.exports = userCtrl;