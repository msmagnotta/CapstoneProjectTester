var express = require('express');
var router = express.Router();

/**
 * GET users listing.
 * @name GET/users
 * @function
 * @memberof module:usersRouter
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * Express router for handling user routes.
 * @module usersRouter
 */
module.exports = router;
