import { Lay } from "../classLay.js";
import { getPointsforLevel } from "../getPointsforLevel.js";
import { massOfCoords, levelFrom } from "../path.js";
import { setNewPointForSearch } from "../search.js";

function createLevelMap1() {
    let newLay = new Lay;
    const MAX_ZOOM = 2, LAY_NUMBER = 1;
    let createdMap = newLay.create(MAX_ZOOM, 'tiles3');

    let collections = getPointsforLevel(LAY_NUMBER);
    createdMap.geoObjects.add(collections.myCollection);

    setNewPointForSearch(createdMap, LAY_NUMBER);
    ////////////////метки, зависящие от масштаба///////////////////////////
    var created = false;
    createdMap.events.add('boundschange', function (e) { //если меняется масштаб
        var eMap = e.get('target');// Получение ссылки на объект, сгенерировавший событие (карта).
        var currentZoom = eMap.getZoom();//получение масштаба
        if (created && currentZoom != MAX_ZOOM) {//если масштаб не max
            createdMap.geoObjects.remove(collections.myCollectionMaxZoom);//метка удаляется
            created = false;
        }
        if (!created && currentZoom == MAX_ZOOM) {//если метка еще не создана и масштаб max
            createdMap.geoObjects.add(collections.myCollectionMaxZoom);//добавление метки на карту
            created = true;
        }
    });


    /////////////////////линия для путей/////////////////////////////////////////////////////
    if (levelFrom == LAY_NUMBER) {
        // Создаем ломаную, используя класс GeoObject.
        var myGeoObject = new ymaps.GeoObject({
            // Описываем геометрию геообъекта.
            geometry: {
                type: "LineString",// Тип геометрии - "Ломаная линия".
                coordinates: massOfCoords
            },
        },
            {
                strokeColor: '#FF0000',// Цвет линии(красный)
                //opacity: 0, //прозрачность
                strokeWidth: 5 //Ширина линии.
            });

        createdMap.geoObjects.add(myGeoObject);// Добавляем линии на карту.
        createdMap.panTo([massOfCoords.at(-1)[0], massOfCoords.at(-1)[1]]);//и центр карты смещается к этому элементу
    }

    //удаление маршрутов при сбросе полей ввода данных
    document.querySelector("#to").addEventListener("search", function () {
        if (document.querySelector("#to").textContent == "") {
            createdMap.geoObjects.remove(myGeoObject);
        }
    });
    document.querySelector("#from").addEventListener("search", function () {
        if (document.querySelector("#from").textContent == "") {
            createdMap.geoObjects.remove(myGeoObject);
        }
    });
};

export { createLevelMap1 };


