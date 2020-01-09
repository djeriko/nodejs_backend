const path = require("path");

const express = require("express");

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET req
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product => POST req
router.post("/add-product", productsController.postAddProduct);

module.exports = router;