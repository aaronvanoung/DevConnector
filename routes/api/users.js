//bring in express
const express = require('express');
// to use express router
const router = express.Router();

//@route  GET api/users
//@desc   Test Route
//@access Public
router.get('/', (req, res) => res.send('Users route'));

module.exports = router;