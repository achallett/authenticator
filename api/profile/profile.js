var jwt = require('jsonwebtoken');
// sign asynchronously



exports.route = function (req, res) {
    res.status(200).json({"user": req.user,"success" : true});
};
/*
jwt.sign({ data: 'bar' }, 'secret', {
    expiresIn: '1s',
    algorithm: 'HS256'
}, function(err, token) {
    console.log(token);
    setTimeout(function(){
        jwt.verify(token, 'secret', function(err, decoded) {
            if (err) {
                console.log("Error " + err.name);
            } else {
                console.log(decoded.data) // bar
                console.log(decoded);
            }
        });
    },1000)

});



// sign asynchronously
jwt.sign({ data: 'bar' }, 'secret', {
    expiresIn: '1s',
    algorithm: 'HS256'
}, function(err, token) {
    console.log(token);
    setTimeout(function(){

    },1000)

});

*/