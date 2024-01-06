var express = require('express')

var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('D:/Курсовая/Курсач 2.0/map/db/database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

var getStaticLevelPoints = function (level, maxZoom) {
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all('SELECT * FROM points WHERE level = ? AND zoom != ?', level, maxZoom, (err, rows)=>{
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    })
}

var getMaxLevelPoints = function (level, maxZoom) {
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all('SELECT * FROM points WHERE level = ? AND zoom = ?', level, maxZoom, (err, rows)=>{
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    })
}

var getAllLevelPoints = function () {
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all('SELECT * FROM points WHERE name != ""', (err, rows)=>{
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    })
}

router.get('/', function (req, res) {
    getStaticLevelPoints(1, 2).then(result => {
        console.log(result);
        res.render('index', { floor: 1, maxZoom: 2});
    });
});

router.post('/first-floor', function (req, res) {
    getStaticLevelPoints(1, 2).then(result => {
        console.log(result);
        res.render('map', { floor: 1, maxZoom: 2});
    });
});

router.post('/second-floor', function (req, res) {
    getStaticLevelPoints(2, 2).then(result => {
        console.log(result);
        res.render('map', { floor: 2, maxZoom: 2});
    });
});

router.post('/third-floor', function (req, res) {
    getStaticLevelPoints(3, 3).then(result => {
        var points = JSON.stringify(result);

        getMaxLevelPoints(3, 3).then(result => {
            res.render('map', {
                floor: 3,
                maxZoom: 4,
                points: points,
                maxPoints: JSON.stringify(result),
            });
        });
    });
});

router.post('/four-floor', function (req, res) {
    getStaticLevelPoints(4, 2).then(result => {
        console.log(result);
        res.render('map', { floor: 4, maxZoom: 2});
    });
});

router.post('/search', function (req, res) {
    let input = req.body.search; // данные, которые ввел пользователь
console.log(input);
    if (input !== '') {
        getAllLevelPoints().then(allPoints => {
            let foundedPoint = allPoints.find(item  => {
                let first = item.name.toLowerCase().replace(/[ ,._-]+/, "");
                let second = input.toLowerCase().replace(/[ ,._-]+/, "");
                return first === second// в массиве всех данных ищем этот объект

            });

            if (foundedPoint) {
                switch (foundedPoint.level) { // и в зависимости от этажа подгружаем карту
                    case 1:
                        getStaticLevelPoints(1, 3).then(result => {
                            var points = JSON.stringify(result);
                            getMaxLevelPoints(1, 3).then(result => {
                                res.render('map', {
                                    floor: 1,
                                    maxZoom: 4,
                                    points: points,
                                    maxPoints: JSON.stringify(result),
                                    searchPoint: JSON.stringify(foundedPoint),
                                });
                            });
                        });
                        break;
                    case 2:
                        getStaticLevelPoints(2, 3).then(result => {
                            var points = JSON.stringify(result);
                            getMaxLevelPoints(2, 3).then(result => {
                                res.render('map', {
                                    floor: 2,
                                    maxZoom: 4,
                                    points: points,
                                    maxPoints: JSON.stringify(result),
                                    searchPoint: JSON.stringify(foundedPoint),
                                });
                            });
                        });
                        break;
                    case 3:
                        getStaticLevelPoints(3, 3).then(result => {
                            var points = JSON.stringify(result);
                            getMaxLevelPoints(3, 3).then(result => {
                                res.render('map', {
                                    floor: 3,
                                    maxZoom: 4,
                                    points: points,
                                    maxPoints: JSON.stringify(result),
                                    searchPoint: JSON.stringify(foundedPoint),
                                });
                            });
                        });
                        break;
                    case 4:
                        getStaticLevelPoints(4, 3).then(result => {
                            var points = JSON.stringify(result);
                            getMaxLevelPoints(4, 3).then(result => {
                                res.render('map', {
                                    floor: 4,
                                    maxZoom: 4,
                                    points: points,
                                    maxPoints: JSON.stringify(result),
                                    searchPoint: JSON.stringify(foundedPoint),
                                });
                            });
                        });
                        break;
                    default: console.log('Search error');
                }
            }
        });
    }


});

module.exports = router;
