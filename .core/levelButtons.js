import {createLevelMap1} from "./lays/lay1.js";
import {createLevelMap2} from "./lays/lay2.js";
import {createLevelMap3} from "./lays/lay3.js";
import {createLevelMap4} from "./lays/lay4.js";
import {deleteOldLevelMap} from "./deleteOldLevelMap.js";


ymaps.ready(createLevelMap1);//изначально при загрузке будет показан первый этаж

const buttonElement1 = document.querySelector("#btn1");
const buttonElement2 = document.querySelector("#btn2");
const buttonElement3 = document.querySelector("#btn3");
const buttonElement4 = document.querySelector("#btn4");

const clickLevelButton = (createLevelMap) => {
    return () => {
        deleteOldLevelMap();//удаление старого этажа
        ymaps.ready(createLevelMap);//показ карты нового этажа
    }
}

buttonElement1.addEventListener('click', clickLevelButton(createLevelMap1));
buttonElement2.addEventListener('click', clickLevelButton(createLevelMap2));
buttonElement3.addEventListener('click', clickLevelButton(createLevelMap3));
buttonElement4.addEventListener('click', clickLevelButton(createLevelMap4));