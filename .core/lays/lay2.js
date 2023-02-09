import { allPoints } from "../allPoints.js";
import { Lay } from "../classLay.js";
import { x, y } from "../search.js";


function createLevelMap2() {
    let newLay = new Lay;
    let createdMap = newLay.create(2, 'tiles3');

    let myCollection = new ymaps.GeoObjectCollection();// Создаем коллекцию.
    // Заполняем коллекцию данными.
    //в allPoints.js лежит массив с данными, выбераются все элементы 2го этажа
    for (let i = 0, l = allPoints.length; i < l; i++) {
        let point;
        if (allPoints[i].coords[2] == 2) {//если точка принадлежит второму этажу
            point = allPoints[i];

            myCollection.add(new ymaps.Placemark(//то она добавляется в коллекцию
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
    }
    createdMap.geoObjects.add(myCollection);// Добавляем коллекцию меток на карту.

    if (x != null && y != null) {
        createdMap.geoObjects.add(new ymaps.Placemark([x, y], {
        }, {
            preset: 'islands#icon',
            iconColor: '#FF0000'
        }));
        createdMap.panTo([x, y]);
    }

}
export { createLevelMap2 };