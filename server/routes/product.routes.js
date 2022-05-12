const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/product.controller');

/**
 * @desc Get all products from db
 * @route Get /api/products
 * @access Public
 */
router.get('/', getAllProducts);

/**
 * @desc Get a product by id from db
 * @route Get /api/products/:id
 * @access Public
 */
router.get('/:id', getProductById);

module.exports = router;