//bring in express
const express = require('express');
// to use express router
const router = express.Router();

//create  a route
//@route  GET api/auth
//@desc   Test Route
//@access Public
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;