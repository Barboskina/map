import { Lay } from "../classLay.js";

function createLevelMap4() {
    let newLay = new Lay;
    let createdMap = newLay.create(2, 'tiles3');


    /////////////////////линия для будующих путей/////////////////////////////////////////////////////
    // Создаем ломаную, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            type: "LineString",// Тип геометрии - "Ломаная линия".
            coordinates: [// Указываем координаты вершин ломаной.
                [40, 100],
                [50, 70],
                [80, 100]//сюда будет передаваться массив координат, собранный из отрезков пути
            ]
        },
    },
        {
            strokeColor: '#FF0000',// Цвет линии.
            //opacity: 0, 
            strokeWidth: 5 //Ширина линии.
        });


    // Добавляем линии на карту.
    createdMap.geoObjects.add(myGeoObject);

    // createdMap.geoObjects.remove(myGeoObject); //удаление линии с карты

};

export { createLevelMap4 };