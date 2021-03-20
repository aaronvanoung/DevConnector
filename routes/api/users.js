//bring in express
const express = require('express');
// to use express router
const router = express.Router();

//@route  POST api/users
//@desc   Register User
//@access Public
//want to send data to this route send name email and password
router.post('/', (req, res) => {
    //object of data to be sent to this route
    //in order to work we have to initalize the middle wear for the body parser
    console.log(req.body);
    res.send('Users route');
});

module.exports = router;