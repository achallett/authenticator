'use strict';
exports.profileParameterCheck = function(req, res, next){
    var errors = [];
    if(!req.query || Object.keys(req.query).length !== 0){
        errors.push({
            "msg" : "Invalid number of parameters in URL",
            "code" : 112
        });
    }
    if (!req.body){
        errors.push({
            "msg" : "Request body not provided",
            "code" : 113
        });
    }
    if (!req.headers["content-type"] || req.headers["content-type"] !== 'application/json'){
        errors.push({
            "msg" : "Invalid Content Type Header",
            "code" : 114
        });
    }
    if (!req.headers['authorization'] || req.headers['authorization'].substring(0, 7) !== 'Bearer '){
        errors.push({
            "msg" : "Invalid Authorization Header",
            "code" : 114
        });
    }
    //Check the token is in the correct format
    if (errors.length > 0){
        res.status(400).json({"errors" : errors});
    } else {
        next();
    }
};