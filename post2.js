ymaps.ready(function () {
    var LAYER_NAME2 = 'user#layer#0',
        MAP_TYPE_NAME2 = 'user#customMap0',
        MAX_ZOOM = 3,
        PIC_WIDTH = 1792,
        PIC_HEIGHT = 1792,
        PATH = 'images/tiles2'

    var Layer2 = function () {
        var layer = new ymaps.Layer(PATH + '/%z/%x-%y.jpeg');
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([0, 3]);
        };
        return layer;
    };

    ymaps.layer.storage.add(LAYER_NAME2, Layer2);
    var mapType0 = new ymaps.MapType(MAP_TYPE_NAME2, [LAYER_NAME2]);
    ymaps.mapType.storage.add(MAP_TYPE_NAME2, mapType0);
    var worldSize = Math.pow(2, MAX_ZOOM) * 256;

    var myMap2 = new ymaps.Map('map', {
        center: [0, 0],
        zoom: 3,
        controls: [],
        type: MAP_TYPE_NAME2
    }, {
        projection: new ymaps.projection.Cartesian([[PIC_HEIGHT / 2 - worldSize, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, worldSize - PIC_WIDTH / 2]], [false, false]),
        restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]
    });



    // Создаем собственный класс.
    CustomControlClass = function (options) {
        CustomControlClass.superclass.constructor.call(this, options);

    };
// И наследуем его от collection.Item.
ymaps.util.augment(CustomControlClass, ymaps.collection.Item, {
    onAddToMap: function (myMap2) {
        CustomControlClass.superclass.onAddToMap.call(this, myMap2);
        
        this.getParent().getChildElement(this).then(this._onGetChildElement, this);
    },
    _onGetChildElement: function (parentDomContainer) {
        $('<div class="pt-5"><form  method="POST"><div class="pt-2"><input type="submit" name="1" value="1 этаж" class="btn btn-primary " /></div><div class="pt-2"><input type="submit" name="2" value="2 этаж" class="btn btn-primary" /></div><div class="pt-2"><input type="submit" name="3" value="3 этаж" class="btn btn-primary" /></div><div class="pt-2"><input type="submit" name="4" value="4 этаж" class="btn btn-primary" /></div></form></div>').appendTo(parentDomContainer);

    },

});

var customControl = new CustomControlClass();
myMap2.controls.add(customControl, {
   
    position: {
        top: 10,
        left: 10
    }
});






})
