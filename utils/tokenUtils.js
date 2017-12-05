var jwt = require('jsonwebtoken');
var key = process.env.tokenkey;

exports.verifyToken = function(req, res, next){
    var token = req.headers['authorization'].substr(7);
    console.log(token);
    jwt.verify(token, 'secret', function(err, decoded) {
        if (err) {
            var errorObj = {};
            switch (err.name) {
                case "JsonWebTokenError":
                    errorObj = {
                        "Success" : false,
                        "Error" : "Token is invalid"
                    }; break;
                case "TokenExpiredError":
                    errorObj = {
                        "Success" : false,
                        "Error" : "Token has expired"
                    };  break;
                default:
                    errorObj = {
                        "Success" : false,
                        "Error" : "Unknown"
                    };
            }
            res.status(401).json(errorObj);
        } else {
            req.user = decoded.data;
            next();
        }
    });
};


exports.generateToken = function(req, res, next){
    jwt.sign({ data: 'bar' }, key, {
        expiresIn: '1h',
        algorithm: 'HS256'
    }, function(err, token) {
        console.log(token);
    });
};