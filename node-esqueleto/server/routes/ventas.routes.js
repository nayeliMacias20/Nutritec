
const express = require('express');
const router = express.Router();

const VentaCtrl = require('../controllers/ventas.controller');

router.get('/', VentaCtrl.getVentas);
router.post('/',VentaCtrl.createVenta);

module.exports = router;