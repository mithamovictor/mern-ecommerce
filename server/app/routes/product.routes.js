const express = require('express');
const router = express.Router();

const { getProducts, getProductById } = require('../controllers/product.controller');

/**
 * @desc Get all products from db
 * @route Get /api/products
 * @access Public
 */
router.get('/', getProducts);

/**
 * @desc Get a product by id from db
 * @route Get /api/products/:id
 * @access Public
 */
router.get('/:id', getProductById);

module.exports = router;
