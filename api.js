const express = require('express');
const authRouter = require('./auth/index');
const router = express.Router();

router.use('/auth',authRouter);
// hello this is dev 
module.exports = router;