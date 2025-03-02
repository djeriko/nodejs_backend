const path = require("path");

const express = require("express");

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET req
router.get("/add-product", adminController.getAddProduct);

// /admin/products =>GET req
router.get('/products', adminController.getProducts);

// /admin/add-product => POST req
router.post("/add-product", adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;