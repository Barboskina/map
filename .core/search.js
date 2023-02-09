import { allPoints } from "./allPoints.js";
import { createLevelMap1 } from "./lays/lay1.js";
import { createLevelMap2 } from "./lays/lay2.js";
import { createLevelMap3 } from "./lays/lay3.js";
import { createLevelMap4 } from "./lays/lay4.js";
import { deleteOldLevelMap } from "./deleteOldLevelMap.js";

const searchButton = document.querySelector("#searchButton");
let x = null, y = null;

let changeLevel = (newLevelMap) => { // функция смены этажей
    deleteOldLevelMap();
    ymaps.ready(newLevelMap);
}


const clickSearchButton = () => {
    return () => {
        let input = document.querySelector("#search").value; // данные, которые ввел пользователь
        for (let i = 0; i < allPoints.length; i++) { // в массиве всех данных ищем этот объект
            if (allPoints[i].text == input) { // если поиск успешный
                let level = allPoints[i].coords[2]; // узнаем этаж
                switch (level) { // и в зависимости от него подгружаем карту
                    case 1: changeLevel(createLevelMap1);
                        break;
                    case 2: changeLevel(createLevelMap2);
                        break;
                    case 3: changeLevel(createLevelMap3);
                        break;
                    case 4: changeLevel(createLevelMap4);
                        break;
                    default: console.log("Search error");
                }
                x = allPoints[i].coords[0]; // так же нужны координаты объекта
                y = allPoints[i].coords[1]; // чтобы поставить метку
            }

        }
    }
}

searchButton.addEventListener('click', clickSearchButton()); // действие при нажатии н кнопку найти

export { x, y };