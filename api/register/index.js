'use strict';

var express = require('express');
var controller = require('./register.js');
var router = express.Router();
var validateLogin = require('./validateLogin.js');

router.post('/', validateLogin.registerParameterCheck, controller.verifyUser);

module.exports = router;

