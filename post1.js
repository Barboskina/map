ymaps.ready(init);

function init() {
    var LAYER_NAME = 'user#layer',
        MAP_TYPE_NAME = 'user#customMap',
        MAX_ZOOM = 3,
        PIC_WIDTH = 1792,
        PIC_HEIGHT = 2000,
        PATH = 'images/tiles1'

    var Layer = function (){
        var layer = new ymaps.Layer(PATH + '/%z/%x-%y.jpeg');
        layer.getZoomRange = function (){
            return ymaps.vow.resolve([0, 3]);
        };

        return layer;
    };

    ymaps.layer.storage.add(LAYER_NAME, Layer);
    var mapType0 = new ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
    ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType0);
    var worldSize = Math.pow(2, MAX_ZOOM) * 256;

    var myMap = new ymaps.Map('map',{
        center: [0, 0],
        zoom: 3,
        controls: [],
        type: MAP_TYPE_NAME
    },{
        projection: new ymaps.projection.Cartesian([[PIC_HEIGHT / 2 - worldSize, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, worldSize - PIC_WIDTH / 2]], [false, false]),
        restrictMapArea: [[-PIC_HEIGHT / 2, -PIC_WIDTH / 2], [PIC_HEIGHT / 2, PIC_WIDTH / 2]]
    });

    var zoomControl = new ymaps.control.ZoomControl({
        options: {
            size: "small",
            position: {
                //bottom: 10,
                //left: 10,
                right:10,
                top:100
            }
        }
    });
    myMap.controls.add(zoomControl);



    ButtonLayout = ymaps.templateLayoutFactory.createClass([
        '<form  method="POST"><div class="pt-2"><input type="submit" name="{{ data.title }}" value="{{ data.content }}" class="btn btn-primary " /></div></form>',
    ].join('')),



    button1 = new ymaps.control.Button({
        data: {
            content: "1 этаж",
            title: 1,
        },
        options: {
            layout: ButtonLayout,
            maxWidth: [170, 190, 220]
        }
    });

myMap.controls.add(button1, { 
    float: 'none', 
    position: {
        left: '10px', 
        top: '70px'
    } 
});


button2 = new ymaps.control.Button({
    data: {
        content: "2 этаж",
        title: 2,
    },
    options: {
        layout: ButtonLayout,
        maxWidth: [170, 190, 220]
    }
});

myMap.controls.add(button2, { 
    float: 'none', 
    position: {
        left: '10px', 
        top: '115px'
    } 
});


button3 = new ymaps.control.Button({
    data: {
        content: "3 этаж",
        title: 3,
    },
    options: {
        layout: ButtonLayout,
        maxWidth: [170, 190, 220]
    }
});

myMap.controls.add(button3, { 
    float: 'none', 
    position: {
        left: '10px', 
        top: '160px'
    } 
});


button4 = new ymaps.control.Button({
    data: {
        content: "4 этаж",
        title: 4,
    },
    options: {
        layout: ButtonLayout,
        maxWidth: [170, 190, 220]
    }
});

myMap.controls.add(button4, { 
    float: 'none', 
    position: {
        left: '10px', 
        top: '205px'
    } 
});

 




    // Ставим метку в центр координат. Обратите внимание, координаты метки задаются в порядке [y, x].
    var point = new ymaps.Placemark([0, 0], {
        balloonContent: 'Координаты метки: [0, 0]'
    }, {
        preset: 'islands#darkOrangeDotIcon'
    });

    myMap.geoObjects.add(point);



    var myPlacemark = new ymaps.Placemark([25, 25], {
        balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
            '<span class="description">Сеть кинотеатров</span>',
        balloonContentBody: '<img src="img/cinema.jpg" height="150" width="200"> <br/> ' +
            '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
            '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
        balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
        hintContent: 'Рога и копыта'
        
    }, {
        preset: 'islands#redDotIcon'
    });

    myMap.geoObjects.add(myPlacemark);


 // Создаем геообъект с типом геометрии "Точка".
 myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [400, 100]
        },
        // Свойства.
        properties: {
            // Контент метки.
            iconContent: 'Я тащусь',
            //hintContent: 'Ну давай уже тащи'
        },
    }, {
        // Опции.
        // Иконка метки будет растягиваться под размер ее содержимого.
        preset: 'islands#blackStretchyIcon',
        // Метку можно перемещать.
        //draggable: true
    }),


    myMap.geoObjects
    .add(myGeoObject)

    .add(new ymaps.Placemark([400, 0], {
        balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    }))
    .add(new ymaps.Placemark([400, -200], {
        balloonContent: '<strong>серобуромалиновый</strong> цвет'
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#735184'
    }))
    .add(new ymaps.Placemark([400, -100], {
        balloonContent: 'цвет <strong>влюбленной жабы</strong>'
    }, {
        preset: 'islands#circleIcon',
        iconColor: '#3caa3c'
    }))
    .add(new ymaps.Placemark([400, -300], {
        balloonContent: 'цвет <strong>детской неожиданности</strong>'
    }, {
        preset: 'islands#circleDotIcon',
        iconColor: 'yellow'
    }))
    .add(new ymaps.Placemark([400, 100], {
        balloonContent: 'цвет <strong>красный</strong>'
    }, {
        preset: 'islands#redSportIcon'
    }))
    .add(new ymaps.Placemark([400, 200], {
        balloonContent: 'цвет <strong>фэйсбука</strong>'
    }, {
        preset: 'islands#governmentCircleIcon',
        iconColor: '#3b5998'
    }))
    .add(new ymaps.Placemark([400, 300], {
        balloonContent: 'цвет <strong>носика Гены</strong>',
        iconCaption: 'Очень длиннный, но невероятно интересный текст'
    }, {
        preset: 'islands#greenDotIconWithCaption'
    }))
    .add(new ymaps.Placemark([400, -300], {
        balloonContent: 'цвет <strong>голубой</strong>',
        iconCaption: 'Очень длиннный, но невероятно интересный текст'
    }, {
        preset: 'islands#blueCircleDotIconWithCaption',
        iconCaptionMaxWidth: '50'
    }));




    // Создадим метку.
    var placemark = new ymaps.Placemark([55.75, 37.61], {
        iconContent: "123"}
    , {
        //preset: "islands#yellowStretchyIcon",
        // Отключаем кнопку закрытия балуна.
        //balloonCloseButton: false,
        // Балун будем открывать и закрывать кликом по иконке метки.
        //hideIconOnBalloonOpen: false
        //preset: 'islands#blackStretchyIcon',
    });
    myMap.geoObjects.add(placemark);


};

