import { allPoints } from "./allPoints.js";

let getPointsforLevel = (level) => {
    let myCollection = new ymaps.GeoObjectCollection();// Создаем коллекцию.
    // Заполняем коллекцию данными.
    //в allPoints.js лежит массив с данными, выбераются все элементы заданого этажа
    for (let i = 0, l = allPoints.length; i < l; i++) {
        let point;
        if (allPoints[i].coords[2] == level) {//если точка принадлежит заданому этажу
            point = allPoints[i];

            myCollection.add(new ymaps.Placemark(//то она добавляется в коллекцию
                point.coords, {
                iconContent: point.value,
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
    return myCollection;
}



export {getPointsforLevel};