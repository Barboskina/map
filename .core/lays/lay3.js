ymaps.ready(init);

function init() {
    let newLay = new Lay;
    let createdLevelMap = newLay.create(2, 'tiles3');

    
    var point = new ymaps.Placemark([0, 0], {
        balloonContent: 'Координаты метки: [0, 0]'
    }, {
        preset: 'islands#darkOrangeDotIcon'
    });
    createdLevelMap.geoObjects.add(point);
    console.log("yes first");
    var created = true;

    createdLevelMap.events.add('boundschange', function (e)  {
        var eMap = e.get('target');// Получение ссылки на объект, сгенерировавший событие (карта).
        console.log(eMap.getZoom());
        var currentZoom = eMap.getZoom();
        if (created && currentZoom!=2){
            createdLevelMap.geoObjects.remove(point);
            console.log("no");
            created = false;
        }
        if (!created && currentZoom==2){
            point = new ymaps.Placemark([0, 0], {
                balloonContent: 'Координаты метки: [0, 0]'
            }, {
                preset: 'islands#darkOrangeDotIcon'
            });
            createdLevelMap.geoObjects.add(point);
            console.log("yes");
            created = true;
        }
    });


};