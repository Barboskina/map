ymaps.ready(init);

function init() {
    let newLay = new Lay;
    let createdLevelMap = newLay.create(2, 'tiles3');








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
            iconImageOffset: point.iconImageOffset,// Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
            iconContentOffset: point.iconContentOffset,// Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentLayout: point.iconContentLayout,// Макет содержимого.
            preset: point.preset,
        }
        ));
    }
    createdLevelMap.geoObjects.add(myCollection);// Добавляем коллекцию меток на карту.


    if (x!=null && y!=null){
    createdLevelMap.geoObjects.add(new ymaps.Placemark([x, y], {
        
    }, {
        preset: 'islands#icon',
        iconColor: '#FF0000'
    }));
    createdLevelMap.panTo([x, y]);
}

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
    //     hintContent: "4-29Г",
    //     balloonContent: "4-29Г",
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
    //     '<div style="color: #FF0000; font-weight: bold; ">$[properties.iconContent]</div>'
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
    //     // // её "ножки" (точки привязки).
    //     // iconImageOffset: [-24, -24],
    //     // // Смещение слоя с содержимым относительно слоя с картинкой.
    //     // iconContentOffset: [15, 15],
    //     // // Макет содержимого.
    //     iconContentLayout: MyIconContentLayout
    // });

    // createdLevelMap.geoObjects.add(myPlacemarkWithContent);
