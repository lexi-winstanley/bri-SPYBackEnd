const db = require('../models');

module.exports = function (app) {
    app.post('/user', function (req, res) {
        console.log('i got called')
        console.log(req);
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
            console.log(dbUser);
        });
        res.send(200);
    });
    
    app.get('/user/:id', function(req, res) {
        console.log(req);
        console.log('get');
        db.User.findOne({userId: req.params.id}).then(function(dbUser) {
            console.log(dbUser);
            res.json(dbUser);
        });
        // res.send('got');
    });

    app.post('/time', function (req, res) {
        console.log('i got called')
        console.log(req);
        console.log(req.body);
        db.ImageTime.create(req.body).then(function(dbNewTime) {
            console.log(dbNewTime);
        });
        res.send(200);
    });
    
    app.get('/time/:id', function(req, res) {
        console.log(req);
        console.log('get');
        db.ImageTime.find({imageId: req.params.id}).sort({time: 1}).limit(1).then(function(dbBestTime) {
            console.log(dbBestTime);
            res.json(dbBestTime);
        });
        // res.send('got');
    });
    //check times for all of image id X 
        //find one with fastest: true
            //compare with current time of image X, if current is fastest

    //add current time 
    //get all times where image id = X and return one with smallest time
    // var findQuery = db.Member.find({country_id : 10}).sort({score : -1}).limit(1);
    //     findQuery.exec(function(err, maxResult){
    //         if (err) {return err;}
    //         // do stuff with maxResult[0]
    // });
};