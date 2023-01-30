<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover">
    <title>Volgu navigation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"></script>
       

  <script src="https://api-maps.yandex.ru/2.1/?apikey=f175462b-3144-476c-9729-375b68a90e9c&lang=ru_RU" type="text/javascript">
    </script>

    <!-- добавим стили mocha для отображения результатов -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- добавляем сам фреймворк mocha -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    // включаем режим тестирования в стиле BDD
    mocha.setup('bdd');
  </script>
  <!-- добавим chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
    // chai предоставляет большое количество функций. Объявим assert глобально
    let assert = chai.assert;
  </script>
</head>

<body>


<?php
echo("

const scriptForLays = document.createElement('script');
scriptForLays.src = './.core/classLay.js';
document.head.appendChild(scriptForLays);

const scriptForLevelButtons = document.createElement('script');
scriptForLevelButtons.src = './.core/classLevelButtons.js';
document.head.appendChild(scriptForLevelButtons);

const scriptForPoints = document.createElement('script');
scriptForPoints.src = './.core/allPoints.js';
document.head.appendChild(scriptForPoints);

const scriptForSearch = document.createElement('script');
scriptForSearch.src = './.core/search.js';
document.head.appendChild(scriptForSearch);

ymaps.ready(init);

function init() {
    let newLay = new Lay;
    let createdLevelMap = newLay.create(2, 'tiles3');

    let levelButtons = new LevelButtons;
    levelButtons.add(createdLevelMap);

    myCollection = new ymaps.GeoObjectCollection();// Создаем коллекцию.
    
    let myPoints = new Array;// Создаем массив с данными.
    for (let i in allPoints) {
        // console.log(allPoints[i].coords[2]);
        if (allPoints[i].coords[2] == 2) myPoints.push(allPoints[i]);
    }
    for (let i in myPoints){
        console.log(myPoints[i]);
    }

    // Заполняем коллекцию данными.
    for (let i = 0, l = myPoints.length; i < l; i++) {
        let point = myPoints[i];
        myCollection.add(new ymaps.Placemark(
            point.coords, {
            iconContent: point.text,
            balloonContentHeader: point.header,
            balloonContentBody: point.body,
            balloonContentFooter: point.footer,
        }, {
            // Опции.
            iconLayout: point.iconLayout,// Необходимо указать данный тип макета.
            iconImageHref: point.iconImageHref, // Своё изображение иконки метки.
            iconImageSize: point.iconImageSize,//Размеры метки.
            iconImageOffset: point.iconImageOffset,// Смещение левого верхнего угла иконки относительно её \"ножки\" (точки привязки).
            iconContentOffset: point.iconContentOffset,// Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentLayout: point.iconContentLayout,// Макет содержимого.
            preset: point.preset,
        }
        ));
    }
    createdLevelMap.geoObjects.add(myCollection);// Добавляем коллекцию меток на карту.



    let search = new Search;
    search.add(createdLevelMap, allPoints);

}


// // Создаем многоугольник, используя вспомогательный класс Polygon.
    // let myPolygon = new ymaps.Polygon([
    //     // Указываем координаты вершин многоугольника.
    //     [
    //         [100, 100],
    //         [360, 100],
    //         [360, 400],
    //         [400, 360],
    //         [100, 400]
    //     ]
    // ], {
    //     // Описываем свойства геообъекта.
    //     // Содержимое балуна.
    //     hintContent: \"4-29Г\",
    //     balloonContent: \"4-29Г\",
    // }, {
    //     // Задаем опции геообъекта.
    //     // Цвет заливки.
    //     //fillColor: '#00FF0088',
    //     // Ширина обводки.
    //     strokeWidth: 1,
    //     fillOpacity: 0,
    //     strokeColor: '#000000'
    //     //opacity: 0
    // });

    // // Добавляем многоугольник на карту.
    // createdLevelMap.geoObjects.add(myPolygon);


    // // Создаём макет содержимого.
    // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //     '<div style=\"color: #FF0000; font-weight: bold; \">$[properties.iconContent]</div>'
    // ),

    // myPlacemarkWithContent = new ymaps.Placemark([200, 200], {
    //     //hintContent: '4-06Б',
    //     //balloonContent: '4-06Б',
    //     iconContent: '4.29Г'
    // }, {
    //     // Опции.
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#imageWithContent',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'icons.png',
    //     // Размеры метки.
    //     // iconImageSize: [48, 60],
    //     // // Смещение левого верхнего угла иконки относительно
    //     // // её \"ножки\" (точки привязки).
    //     // iconImageOffset: [-24, -24],
    //     // // Смещение слоя с содержимым относительно слоя с картинкой.
    //     // iconContentOffset: [15, 15],
    //     // // Макет содержимого.
    //     iconContentLayout: MyIconContentLayout
    // });

    // createdLevelMap.geoObjects.add(myPlacemarkWithContent);
");
?>

<div id="map" style="width: 100%; height: 740px"></div>
</body>

</html>