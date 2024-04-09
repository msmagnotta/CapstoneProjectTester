const express = require('express');
const router = express.Router();

/**
 * GET home page.
 * @name GET/
 * @function
 * @memberof module:indexRouter
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
router.get('/', function(req, res, next) {
  res.send('It is working')
});

/**
 * Express router for handling index routes.
 * @module indexRouter
 */
module.exports = router;
