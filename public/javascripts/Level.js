class Level {
    constructor(ymaps, maxZoom, floor, jsonPoints, jsonMaxPoints, jsonSearchPoint) {
        const LAYER_NAME = 'user#layer' + floor;
        const MAP_TYPE_NAME = 'user#customMap';
        const PIC_WIDTH = 1000;
        const PIC_HEIGHT = 1000;
        const PATH = '../tiles/tiles' + floor;

        let Layer = function () {
            let layer = new ymaps.Layer(PATH + '/%z/%x-%y.svg');
            layer.getZoomRange = function () {
                return ymaps.vow.resolve([0, maxZoom]);
            };
            return layer;
        };

        ymaps.layer.storage.add(LAYER_NAME, Layer);
        const mapType = new ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
        ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType);

        let worldSize = Math.pow(2, 2) * 256;

        let createdLevelMap = new ymaps.Map('map', {
            center: [0, 0],
            zoom: maxZoom,
            controls: [],
            type: MAP_TYPE_NAME
        }, {
            projection: new ymaps.projection.Cartesian([[PIC_HEIGHT / 2 - worldSize, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, worldSize - PIC_WIDTH / 2]], [false, false]),
            restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]
        });

        createdLevelMap.controls.add(new ymaps.control.ZoomControl({
                options: {
                    size: 'small',
                    position: {
                        right: 10,
                        top: 100
                    }
                }
            })
        );

        if (jsonPoints) {
            jsonPoints = jsonPoints.replace(/&quot;/ig,'"');
            let points = JSON.parse(jsonPoints);
            let collection = new ymaps.GeoObjectCollection();
            for (let i = 0; i < points.length; i++) {
                let options = {};
                if (points[i].preset) {
                    options = {preset: points[i].preset};
                }
                else {
                    options = {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/icon.png'
                    };
                }
                collection.add(new ymaps.Placemark(
                    [points[i].y, points[i].x], {
                        iconContent: points[i].name,
                    }, options
                ));
            }
            console.log(collection);
            createdLevelMap.geoObjects.add(collection);
        }


        //////////////метки, зависящие от масштаба///////////////////////////
        if (jsonMaxPoints) {
            jsonMaxPoints = jsonMaxPoints.replace(/&quot;/ig,'"');
            let maxPoints = JSON.parse(jsonMaxPoints);
            let maxCollection = new ymaps.GeoObjectCollection();
            for (let i = 0; i < maxPoints.length; i++) {
                console.log(maxPoints[i]);
                let options = {};
                if (maxPoints[i].preset) {
                    options = {preset: maxPoints[i].preset};
                }
                else {
                    options = {
                        iconLayout: 'default#image',
                        iconImageHref: 'img/icon.png'
                    };
                }
                maxCollection.add(new ymaps.Placemark(
                    [maxPoints[i].y, maxPoints[i].x], {
                        iconContent: maxPoints[i].name,
                    }, options
                ));
            }

        let created = false;
        createdLevelMap.events.add('boundschange', function (e) { //если меняется масштаб
            var eMap = e.get('target');// Получение ссылки на объект, сгенерировавший событие (карта).
            var currentZoom = eMap.getZoom();//получение масштаба
            if (created && currentZoom !== maxZoom) {//если масштаб не max
                createdLevelMap.geoObjects.remove(maxCollection);//метка удаляется
                created = false;
            }
            if (!created && currentZoom === maxZoom){//если метка еще не создана и масштаб max
                createdLevelMap.geoObjects.add(maxCollection);//добавление метки на карту
                created = true;
            }
        });
        }


        console.log(jsonSearchPoint);

        if (jsonSearchPoint) {
            jsonSearchPoint = jsonSearchPoint.replace(/&quot;/ig,'"');
            let searchPoint = JSON.parse(jsonSearchPoint);
            console.log(searchPoint);
            createdLevelMap.panTo([searchPoint.y, searchPoint.x]);//и центр карты смещается к этому элементу
        }
    }
}
