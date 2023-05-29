import { Lay } from "../classLay.js";
import { getPointsforLevel } from "../getPointsforLevel.js";
import { massOfCoords, levelFrom } from "../path.js";
import { setNewPointForSearch } from "../search.js";

function createLevelMap2() {
    let newLay = new Lay;
    let createdMap = newLay.create(2, 'tiles3');

    createdMap.geoObjects.add(getPointsforLevel(2));

    setNewPointForSearch(createdMap, 2);



    /////////////////////линия для будующих путей/////////////////////////////////////////////////////
    if (levelFrom == 2) {
                    // Создаем ломаную, используя класс GeoObject.
            var myGeoObject = new ymaps.GeoObject({
                // Описываем геометрию геообъекта.
                geometry: {
                    type: "LineString",// Тип геометрии - "Ломаная линия".
                    coordinates: massOfCoords
                },
            },
                {
                    strokeColor: '#FF0000',// Цвет линии.
                    //opacity: 0, 
                    strokeWidth: 5 //Ширина линии.
                });
        
        
            // Добавляем линии на карту.
            createdMap.geoObjects.add(myGeoObject);
            createdMap.panTo([massOfCoords.at(-1)[0], massOfCoords.at(-1)[1]]);//и центр карты смещается к этому элементу
            
        
            // createdMap.geoObjects.remove(myGeoObject); //удаление линии с карты
    }


}

export { createLevelMap2 };