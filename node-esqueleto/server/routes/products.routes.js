const express = require('express');
const router = express.Router();

const ProductCtrl = require('../controllers/products.controller');

router.get('/', ProductCtrl.getProducts);

router.post('/',ProductCtrl.createProduct);

router.post('/',ProductCtrl.deleteProduct);

router.delete('/:id',ProductCtrl.deleteProduct);

module.exports = router;