'use strict';
module.exports = function (app) {
    app.use('/api/login', require('./api/login'));
    app.use('/api/profile', require('./api/profile'));
};