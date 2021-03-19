//bring in express
const express = require('express');
// to use express router
const router = express.Router();

//create  a route
//@route  GET api/posts
//@desc   Test Route
//@access Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;