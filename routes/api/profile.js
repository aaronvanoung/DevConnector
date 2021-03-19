//bring in express
const express = require('express');
// to use express router
const router = express.Router();

//@route  GET api/profile
//@desc   Test Route
//@access Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;