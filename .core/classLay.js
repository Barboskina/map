class Lay {

    create(max_zoom, path) {

        const LAYER_NAME = 'user#layer';
        const MAP_TYPE_NAME = 'user#customMap';
        const MAX_ZOOM = max_zoom;
        const PIC_WIDTH = 1792;
        const PIC_HEIGHT = 2000;
        //const PATH = `tiles/${path}`;
        const PATH = `tiles/` + path;

        let Layer = function () {
            let layer = new ymaps.Layer(PATH + '/%z/%x-%y.svg');
            layer.getZoomRange = function () {
                return ymaps.vow.resolve([0, max_zoom]);
            };
            return layer;
        };

        ymaps.layer.storage.add(LAYER_NAME, Layer);
        let mapType = new ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
        ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType);
        let worldSize = Math.pow(2, MAX_ZOOM) * 256;

        let createdLevelMap = new ymaps.Map('map', {
            center: [0, 0],
            zoom: max_zoom,
            controls: [],
            type: MAP_TYPE_NAME
        }, {
            projection: new ymaps.projection.Cartesian([[PIC_HEIGHT / 2 - worldSize, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, worldSize - PIC_WIDTH / 2]], [false, false]),
            restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]
        });

        let zoomControl = new ymaps.control.ZoomControl({
            options: {
                size: "small",
                position: {
                    //bottom: 10,
                    //left: 10,
                    right: 10,
                    top: 100
                }
            }
        });

        createdLevelMap.controls.add(zoomControl);

        return createdLevelMap;
    }

}