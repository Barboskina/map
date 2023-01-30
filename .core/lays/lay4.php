<?php
echo("
const scriptForLays = document.createElement('script');
scriptForLays.src = './.core/classLay.js';
document.head.appendChild(scriptForLays);

const scriptForLevelButtons = document.createElement('script');
scriptForLevelButtons.src = './.core/classLevelButtons.js';
document.head.appendChild(scriptForLevelButtons);

ymaps.ready(init);

function init() {
    let newLay = new Lay;
    let createdLevelMap = newLay.create(2, 'tiles3');

    let levelButtons = new LevelButtons;
    levelButtons.add(createdLevelMap);

    
    // Создаем ломаную, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - \"Ломаная линия\".
            type: \"LineString\",
            // Указываем координаты вершин ломаной.
            coordinates: [
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
    createdLevelMap.geoObjects.add(myGeoObject);




};

");
?>

