import {Lay} from "../classLay.js";
import { getPointsforLevel } from "../getPointsforLevel.js";
import { massOfCoords, levelFrom } from "../path.js";
import { setNewPointForSearch } from "../search.js";


function createLevelMap3() {
    let newLay = new Lay;
    let createdMap = newLay.create(4, 'tiles3');

    createdMap.geoObjects.add(getPointsforLevel(3));

    setNewPointForSearch(createdMap, 3);



    ////////////////метка, зависящая от масштаба///////////////////////////
    var point = new ymaps.Placemark([0, 0], {
        balloonContent: 'Координаты метки: [0, 0]'
    }, {
        preset: 'islands#darkOrangeDotIcon'
    });
    createdMap.geoObjects.add(point);
    var created = true;

    createdMap.events.add('boundschange', function (e) { //если меняется масштаб
        var eMap = e.get('target');// Получение ссылки на объект, сгенерировавший событие (карта).
        var currentZoom = eMap.getZoom();//получение масштаба
        if (created && currentZoom!=3){//если масштаб не 2
            createdMap.geoObjects.remove(point);//метка удаляется
            created = false;
        }
        if (!created && currentZoom==3){//если метка еще не создана и масштаб 2
            point = new ymaps.Placemark([0, 0], {
                balloonContent: 'Координаты метки: [0, 0]'
            }, {
                preset: 'islands#darkOrangeDotIcon'
            });
            createdMap.geoObjects.add(point);//добавление метки на карту
            created = true;
        }
    });





    /////////////////////линия для будующих путей/////////////////////////////////////////////////////
    if (levelFrom == 3) {
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


};
export {createLevelMap3};