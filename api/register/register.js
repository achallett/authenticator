var jwt = require ('jsonwebtoken');
var expiryInSeconds = 3600;

exports.generateToken = function (req,res){
    var expiryTime = Math.floor(Date.now()/1000) + expiryInSeconds;
    jwt.sign({ data: {
        "email" : req.user.email,
        "first_name" : req.user.first_name,
        "last_name" : req.user.last_name
    } }, 'secret', {
        expiresIn: expiryInSeconds,
        algorithm: 'HS256'
    }, function(err, token) {
        console.log(token);
        res.status(200).json({
            "auth_token" : "Bearer " + token,
            "expires" : expiryTime
        })
    });
};




//Verifies the user exists in the database
exports.verifyUser = function (req, res, next){
    if (req.user.email === "matthew.smith@example.com"){
        req.user.first_name = "Matthew";
        req.user.last_name = "Smith";
        next();
    } else {
        res.status(401).json({
            "Success" : false,
            "Error" : "No user found in db",
            "Code" : 119
        })
    }
};
