var jwt = require('jsonwebtoken');


// sign asynchronously
jwt.sign({ data: 'bar' }, 'secret', {
    expiresIn: '1h',
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

