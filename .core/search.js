import { allPoints } from "./allPoints.js";
import { createLevelMap1 } from "./lays/lay1.js";
import { createLevelMap2 } from "./lays/lay2.js";
import { createLevelMap3 } from "./lays/lay3.js";
import { createLevelMap4 } from "./lays/lay4.js";
import { deleteOldLevelMap } from "./deleteOldLevelMap.js";

const searchButton = document.querySelector("#searchButton");
let x = null, y = null;
 
 $('#search').autocomplete({
     lookup: allPoints,
     lookupLimit: 5,
     onSelect: function (suggestion) {
     }
 });

let changeLevel = (newLevelMap) => { // функция смены этажей
    deleteOldLevelMap();
    ymaps.ready(newLevelMap);
}
//[0-9]{1,2}[,.-_]{0,1}[ ]*[0-9]{1,2}[абвгде]

let level = 0;
const clickSearchButton = () => {

    return () => {
        let input = document.querySelector("#search").value; // данные, которые ввел пользователь
        if (input != '') {
            let findedPoint = allPoints.find(item  => {

                let first = item.value.toLowerCase().replace(/[ ,._-]+/, "");
                let second = input.toLowerCase().replace(/[ ,._-]+/, "");

                return first == second// в массиве всех данных ищем этот объект
            
            });

            if (findedPoint) {
                level = findedPoint.coords[2]; // узнаем этаж
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
                x = findedPoint.coords[0]; // также нужны координаты объекта
                y = findedPoint.coords[1]; // чтобы поставить метку
            }
            else {
                alert("Нет совпадений");
                createLevelMap3.remove(currentMark);
                x = null;
                y = null;
            }
            
        }
        else {
            x = null;
            y = null;
        }

    }
}

searchButton.addEventListener('click', clickSearchButton()); // действие при нажатии н кнопку найти
searchButton.addEventListener('click', clickSearchButton()); // действие при нажатии н кнопку найти
document.querySelector("#search").addEventListener("keyup", function(e) {//действие при нажатие enter
        if (e.keyCode === 13) {
            searchButton.click();
        }
    });

let currentMark = null;

let setNewPointForSearch = (createdMap, currentLevel) => {
    if (x != null && y != null && level == currentLevel) {// при поиске находятся координаты искомого места
        currentMark = createdMap.geoObjects.add(new ymaps.Placemark([x, y], { //в этом месте ставится метка
    }, {
        preset: 'islands#icon',
        iconColor: '#FF0000'
    }));

    createdMap.panTo([x, y]);//и центр карты смещается к этому элементу
}
}

export { setNewPointForSearch };