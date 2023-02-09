import {Lay} from "../classLay.js";

function createLevelMap3() {
    let newLay = new Lay;
    let createdMap = newLay.create(2, 'tiles3');

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
        if (created && currentZoom!=2){//если масштаб не 2
            createdMap.geoObjects.remove(point);//метка удаляется
            created = false;
        }
        if (!created && currentZoom==2){//если метка еще не создана и масштаб 2
            point = new ymaps.Placemark([0, 0], {
                balloonContent: 'Координаты метки: [0, 0]'
            }, {
                preset: 'islands#darkOrangeDotIcon'
            });
            createdMap.geoObjects.add(point);//добавление метки на карту
            created = true;
        }
    });


};
export {createLevelMap3};