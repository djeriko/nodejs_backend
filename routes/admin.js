const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET req
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {pageTitle: 'Add product', path: '/admin/add-product'});
});

// /admin/add-product => POST req
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;