'use strict';
exports.loginParameterCheck = function(req, res, next){
    var errors = [];
    if(!req.query || Object.keys(req.query).length !== 0){
        errors.push({
            "msg" : "Invalid number of parameters in URL",
            "code" : 112
        });
    }
    if (!req.body || Object.keys(req.body).length !== 2) {
        errors.push({
            "msg" : "Request body does not contain correct number of keys",
            "code" : 113
        });
    }
    if (!req.headers["content-type"] || req.headers["content-type"] !== 'application/json'){
        errors.push({
            "msg" : "Invalid Content Type Header",
            "code" : 114
        });
    }
    if (!req.body.email || !req.body.password){
        errors.push({
            "msg" : "Email or password not provided",
            "code" : 115
        });
    }
    //Check the token is in the correct format
    if (errors.length > 0){
        res.status(400).json({"errors" : errors});
    } else {
        req.user = {};
        req.user.email = req.body.email;
        next();
    }
};