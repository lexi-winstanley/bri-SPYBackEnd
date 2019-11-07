const db = require('../models');

module.exports = function (app) {
    app.post('/user', function (req, res) {
        db.User.create(req.body).then(function() {
            res.send(200);
        });
    });
    
    app.get('/user/:id', function(req, res) {
        db.User.findOne({userId: req.params.id}).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.post('/time', function (req, res) {
        db.ImageTime.create(req.body).then(function() {
            res.send(200);
        });  
    });
    
    app.get('/time/:id', function(req, res) {
        db.ImageTime.find({imageId: req.params.id}).sort({time: 1}).limit(1).then(function(dbBestTime) {
            res.json(dbBestTime);
        });
    });
};