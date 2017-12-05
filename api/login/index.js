'use strict';

var express = require('express');
var controller = require('./login.js');
var router = express.Router();
var validateLogin = require('./validateLogin.js');

router.post('/', validateLogin.loginParameterCheck, controller.verifyUser, controller.generateToken);

module.exports = router;

