var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('D:/Курсовая/Курсач 2.0/map/db/database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

var getLevelPoints = function (level) {
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all('SELECT * FROM points WHERE level = ? AND zoom', level, (err, rows)=>{
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    })
}

router.get('/', function (req, res) {
    getLevelPoints(1).then(result => {
        console.log(result);
        res.render('index', { floor: 1, maxZoom: 2});
    });
});

router.post('/first-floor', function (req, res) {
    getLevelPoints(1).then(result => {
        console.log(result);
        res.render('map', { floor: 1, maxZoom: 2});
    });
});

router.post('/second-floor', function (req, res) {
    getLevelPoints(2).then(result => {
        console.log(result);
        res.render('map', { floor: 2, maxZoom: 2});
    });
});

router.post('/third-floor', function (req, res) {
    getLevelPoints(3).then(result => {
        let points = JSON.stringify(result);
        console.log(points);


        res.render('map', { floor: 3, maxZoom: 4, points: points});
    });
});

router.post('/four-floor', function (req, res) {
    getLevelPoints(4).then(result => {
        console.log(result);
        res.render('map', { floor: 4, maxZoom: 2});
    });
});


module.exports = router;
