const db = require('../models');

module.exports = function (app) {
    app.post('/user', function (req, res) {
        console.log('i got called')
        console.log(req);
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
            console.log(dbUser);
        });
    });
    
    app.get('/user/:id', function(req, res) {
        console.log(req);
        console.log('get');
        db.User.findOne({userId: req.params.id}).then(function(dbUser) {
            console.log(dbUser);
        });
        res.send('hello');
    });
};