var express = require('express')
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('D:/Курсовая/Курсач 2.0/map/db/database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

var getLevelPoints = function (level, zoom) {
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all('SELECT * FROM points WHERE level = ? AND zoom = ?', level, zoom, (err, rows)=>{
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
    })
}

var getAllLevelPoints = function (input) {
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.get('SELECT * FROM points WHERE name LIKE ?', '%' + input + '%', (err, row)=>{
                if (err) {
                    reject(err);
                }
                resolve(row);
            });
        });
    })
}

var getLiveSearch = function (input) {
    return new Promise((resolve, reject)=>{
        db.serialize(()=>{
            db.all('SELECT * FROM points WHERE name LIKE ? LIMIT 5', '%' + input + '%', (err, rows)=>{
                if (err) {
                    reject(err);
                }
                resolve(JSON.stringify(rows));
            });
        });
    })
}

router.get('/', function (req, res) {
    getLevelPoints(1, 2).then(result => {
        res.render('index', { floor: 1, maxZoom: 2});
    });
});

router.post('/first-floor', function (req, res) {
    getLevelPoints(1, 2).then(result => {
        res.render('map', { floor: 1, maxZoom: 2});
    });
});

router.post('/second-floor', function (req, res) {
    getLevelPoints(2, 2).then(result => {
        res.render('map', { floor: 2, maxZoom: 2});
    });
});

router.post('/third-floor', function (req, res) {
    getLevelPoints(3, 1).then(zoom1Points => {
        getLevelPoints(3, 2).then(zoom2Points => {
            getLevelPoints(3, 3).then(zoom3Points => {
                getLevelPoints(3, 4).then(zoom4Points => {
                    res.render('map', {
                        floor: 3,
                        maxZoom: 4,
                        points: JSON.stringify([zoom1Points, zoom2Points, zoom3Points, zoom4Points]),
                    });
                });
            });
        });

    });
});

router.post('/four-floor', function (req, res) {
    getLevelPoints(4, 2).then(result => {
        res.render('map', { floor: 4, maxZoom: 2});
    });
});

router.post('/search', function (req, res) {
    let input = req.body.search; // данные, которые ввел пользователь
    console.log(input);
    if (input !== '') {
        getAllLevelPoints(input).then(foundedPoint => {
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
            else {
                res.send('<script>alert("Нет совпадений")</script>');
            }
        });
    }
});

router.post('/live-search', function (req, res) {
    let input = req.body.search;
        getLiveSearch(input).then(allPoints => {
            if (allPoints !== '') {
                res.send("<script>console.log(" + allPoints + ")</script>");
            }
        });
});

// router.post('/path', function (req, res) {
//     let inputFrom = req.body.from; // данные, которые ввел пользователь
//     let inputTo = req.body.to;
//
//     getLiveSearch(inputFrom).then(first => {
//         getLiveSearch(inputTo).then(second => {
//             if (inputFrom !== '' && inputTo !== '') {
//                 let IndexPointFrom = first.id;
//                 let IndexPointTo = second.id;
//
//                 if (first.level === second.level) {//маршрут на одном этаже
//                     let massOfCoords = [];
//                     const n = allPoints.length; //кол-во точек
//                     const m = allEdges.length; //кол-во ребер
//                     const INF = 100000;
//
//                     let d = Array(n).fill(INF);//массив длин дорог, изначально заполненный бесконечностями
//                     d[IndexPointFrom] = 0;
//
//                     let p = Array(n).fill(-1);//массив предков, изначально заполненный -1
//
//                     for (; ;) {
//                         let any = false;
//                         for (let j = 0; j < m; ++j) {
//                             if (d[allEdges[j].begin] < INF && d[allEdges[j].end] > d[allEdges[j].begin] + allEdges[j].value) {
//                                 d[allEdges[j].end] = d[allEdges[j].begin] + allEdges[j].value;
//                                 p[allEdges[j].end] = allEdges[j].begin;
//                                 any = true;
//                             }
//                             if (d[allEdges[j].end] < INF && d[allEdges[j].begin] > d[allEdges[j].end] + allEdges[j].value) {
//                                 d[allEdges[j].begin] = d[allEdges[j].end] + allEdges[j].value;
//                                 p[allEdges[j].begin] = allEdges[j].end;
//                                 any = true;
//                             }
//                         }
//                         if (!any) break;
//                     }
//                     console.log(d);
//
//
//                     if (d[IndexPointTo] == INF)
//                         console.log("No path from ", IndexPointFrom, " to ", IndexPointTo, ".");
//                     else {
//                         for (let cur = IndexPointTo; cur != -1; cur = p[cur]) {
//                             massOfCoords.push(allPoints[cur].coords);
//                         }
//                         console.log(massOfCoords);
//                     }
//
//                 } else {//маршрут на разных этажах
//                     mapLoad(levelFrom);//создаем карту
//                 }
//             }
//         });
//     });
//
// });

module.exports = router;
