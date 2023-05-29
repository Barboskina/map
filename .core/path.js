import { allPoints } from "./allPoints.js";
import { allEdges } from "./allEdges.js";
import { createLevelMap1 } from "./lays/lay1.js";
import { createLevelMap2 } from "./lays/lay2.js";
import { createLevelMap3 } from "./lays/lay3.js";
import { createLevelMap4 } from "./lays/lay4.js";
import { deleteOldLevelMap } from "./deleteOldLevelMap.js";

var massOfCoords = [];
$('#from').autocomplete({
    lookup: allPoints,
    lookupLimit: 5,
    onSelect: function (suggestion) {
    }
}); 
$('#to').autocomplete({
    lookup: allPoints,
    lookupLimit: 5,
    onSelect: function (suggestion) {
    }
});
let changeLevel = (newLevelMap) => { // функция смены этажей
    deleteOldLevelMap();
    ymaps.ready(newLevelMap);
}

let mapLoad = (level) => { // функция загрузки этажей
    switch (level) { // в зависимости от этажа подгружаем карту маршрута
        case 1: changeLevel(createLevelMap1);
            break;
        case 2: changeLevel(createLevelMap2);
            break;
        case 3: changeLevel(createLevelMap3);
            break;
        case 4: changeLevel(createLevelMap4);
            break;
        default: console.log("Path error");
    }
}
let levelFrom = 0;
const clickPathButton = () => {
    return () => {
        let inputFrom = document.querySelector("#from").value; // данные, которые ввел пользователь
        let inputTo = document.querySelector("#to").value; // данные, которые ввел пользователь

        let IndexPointFrom = allPoints.find(item  => {
            let first = item.value.toLowerCase().replace(/[ ,._-]+/, "");
            let second = inputFrom.toLowerCase().replace(/[ ,._-]+/, "");
            return first == second// в массиве всех данных ищем этот объект
        }).number;// в массиве всех данных ищем индекс объекта
        let IndexPointTo = allPoints.find(item  => {
            let first = item.value.toLowerCase().replace(/[ ,._-]+/, "");
            let second = inputTo.toLowerCase().replace(/[ ,._-]+/, "");
            return first == second// в массиве всех данных ищем этот объект
        }).number;// в массиве всех данных ищем индекс объекта

        if (IndexPointFrom >= 0 && IndexPointFrom >= 0) {
            console.log(IndexPointFrom);
            console.log(IndexPointTo);

            
            levelFrom = allPoints[IndexPointFrom].coords[2]; // узнаем этаж
            let levelTo = allPoints[IndexPointTo].coords[2]; // узнаем этаж

            mapLoad(levelFrom);//создаем карту этажа-начала

            if (levelFrom == levelTo) {//маршрут на одном этаже
                massOfCoords = [];
                const n = allPoints.length, //кол-во точек
                m = allEdges.length; //кол-во ребер
                const INF = 1000000000;
            
                let d = Array(n).fill(INF);//массив длин дорог, изначально заполненный бесконечностями
                d[IndexPointFrom] = 0;
        
                let p = Array(n).fill(-1);;//массив предков, изначально заполненный -1
            
                for (;;) {
                    let any = false;
                    for (let j=0; j<m; ++j) {
                        if (d[allEdges[j].begin] < INF && d[allEdges[j].end] > d[allEdges[j].begin] + allEdges[j].value) {
                            d[allEdges[j].end] = d[allEdges[j].begin] + allEdges[j].value;
                            p[allEdges[j].end] = allEdges[j].begin;
                            any = true;
                        }
                        if (d[allEdges[j].end] < INF && d[allEdges[j].begin] > d[allEdges[j].end] + allEdges[j].value) {
                            d[allEdges[j].begin] = d[allEdges[j].end] + allEdges[j].value;
                            p[allEdges[j].begin] = allEdges[j].end;
                            any = true;
                        }
                    }
                    if (!any) break;
                }
                console.log(d);

            
                if (d[IndexPointTo] == INF)
                    console.log("No path from ", IndexPointFrom ," to ", IndexPointTo, ".");
                else {
                    for (let cur=IndexPointTo; cur!=-1; cur=p[cur]) {
                        massOfCoords.push(allPoints[cur].coords);
                    }
                    console.log(massOfCoords);
                }
            
            }
            else {//маршрут на разных этажах
                mapLoad(levelFrom);//создаем карту
            }
        }
    }
}


const pathButton = document.querySelector("#pathButton");
pathButton.addEventListener('click', clickPathButton()); // действие при нажатии на кнопку показать

export { massOfCoords, levelFrom };