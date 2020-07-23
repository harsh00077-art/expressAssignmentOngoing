const express = require('express');
const authRouter = require('./auth/index');
const router = express.Router();

router.use('/auth',authRouter);
//api.js master branch comment
module.exports = router;