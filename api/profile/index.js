'use strict';

var express = require('express');
var controller = require('./profile');
var tokenUtils = require('../../utils/tokenUtils');
var router = express.Router();
var validateProfile = require('./validateProfileRequest');
router.post('/', validateProfile.profileParameterCheck, tokenUtils.verifyToken, controller.route);
module.exports = router;