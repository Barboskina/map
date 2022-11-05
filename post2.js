ymaps.ready(init);

function init() {
    var LAYER_NAME = 'user#layer#0',
        MAP_TYPE_NAME = 'user#customMap0',
        MAX_ZOOM = 3,
        PIC_WIDTH = 1792,
        PIC_HEIGHT = 2000,
        PATH = 'images/tiles2'

    var Layer = function () {
        var layer = new ymaps.Layer(PATH + '/%z/%x-%y.jpeg');
        layer.getZoomRange = function () {
            return ymaps.vow.resolve([0, 3]);
        };
        return layer;
    };

    ymaps.layer.storage.add(LAYER_NAME, Layer);
    var mapType0 = new ymaps.MapType(MAP_TYPE_NAME, [LAYER_NAME]);
    ymaps.mapType.storage.add(MAP_TYPE_NAME, mapType0);
    var worldSize = Math.pow(2, MAX_ZOOM) * 256;

    var myMap = new ymaps.Map('map', {
        center: [0, 0],
        zoom: 3,
        controls: [],
        type: MAP_TYPE_NAME
    }, {
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


    // Создаем многоугольник, используя вспомогательный класс Polygon.
    var myPolygon = new ymaps.Polygon([
        // Указываем координаты вершин многоугольника.
        [
            [100, 100],
            [360, 100],
            [360, 400],
            [400, 360],
            [100, 400]
        ]
    ], {
        // Описываем свойства геообъекта.
        // Содержимое балуна.
        hintContent: "4-29Г",
        balloonContent: "4-29Г",
    }, {
        // Задаем опции геообъекта.
        // Цвет заливки.
        //fillColor: '#00FF0088',
        // Ширина обводки.
        strokeWidth: 1,
        fillOpacity: 0,
        strokeColor: '#000000'
        //opacity: 0
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myPolygon);


    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FF0000; font-weight: bold; ">$[properties.iconContent]</div>'
    ),

    myPlacemarkWithContent = new ymaps.Placemark([200, 200], {
        //hintContent: '4-06Б',
        //balloonContent: '4-06Б',
        iconContent: '4.29Г'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'images/ball.png',
        // Размеры метки.
        // iconImageSize: [48, 60],
        // // Смещение левого верхнего угла иконки относительно
        // // её "ножки" (точки привязки).
        // iconImageOffset: [-24, -24],
        // // Смещение слоя с содержимым относительно слоя с картинкой.
        // iconContentOffset: [15, 15],
        // // Макет содержимого.
        iconContentLayout: MyIconContentLayout
    });

    myMap.geoObjects.add(myPlacemarkWithContent);



    // Создаем коллекцию.
    myCollection = new ymaps.GeoObjectCollection(),
    // Создаем массив с данными.
        myPoints = [
            { coords: [70, 100], text: '4.29Г', header: '<span class="description">4.29Г</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"', iconLayout: 'default#imageWithContent', iconImageHref: 'images/ball.png', iconImageSize: [48, 60], iconImageOffset: [-24, -24], iconContentOffset: [15, 15], iconContentLayout: MyIconContentLayout},
            { coords: [70, 200], text: '3.06А', iconLayout: 'default#imageWithContent', iconImageHref: 'images/ball.png', iconImageSize: [48, 60], iconImageOffset: [-24, -24], iconContentOffset: [15, 15], iconContentLayout: MyIconContentLayout},
            { coords: [70, 300], text: 'Гардероб', header: '<span class="description">Гардероб</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"',preset: 'islands#lightBlueStretchyIcon'},
            { coords: [70, 0], text: 'Музей', header: '<span class="description">Музей</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"', preset: 'islands#lightBlueStretchyIcon'},
            { coords: [70, -100], text: 'Библиотека', header: '<span class="description">Библиотека</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"',preset: 'islands#lightBlueStretchyIcon'},
            { coords: [100, 120], text: 'Спортивный зал', header: '<span class="description">Спортивный зал</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"', preset: 'islands#lightBlueStretchyIcon'},
            { coords: [70, 200], text: 'Столовая', header: '<span class="description">Столовая</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"', preset: 'islands#lightBlueStretchyIcon'}
            
        ];
        
    // Заполняем коллекцию данными.
    for (var i = 0, l = myPoints.length; i < l; i++) {
        var point = myPoints[i];
        myCollection.add(new ymaps.Placemark(
            point.coords, {
                iconContent: point.text,
                balloonContentHeader: point.header,
                balloonContentBody: point.body,
                balloonContentFooter: point.footer,
            },{
                // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: point.iconLayout,
            // Своё изображение иконки метки.
            iconImageHref: point.iconImageHref,
            //Размеры метки.
            iconImageSize: point.iconImageSize,
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: point.iconImageOffset,
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: point.iconContentOffset,
            // Макет содержимого.
            iconContentLayout: point.iconContentLayout,
            preset: point.preset,
            }
        ));
    }


    // Добавляем коллекцию меток на карту.
    myMap.geoObjects.add(myCollection);



    SearchLayout = ymaps.templateLayoutFactory.createClass([
        '<input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>',
    ].join(''))

    // Создаем экземпляр класса ymaps.control.SearchControl
    var mySearchControl = new ymaps.control.SearchControl({
        options: {
            // Заменяем стандартный провайдер данных (геокодер) нашим собственным.
            provider: new CustomSearchProvider(myPoints),
            // Не будем показывать еще одну метку при выборе результата поиска,
            // т.к. метки коллекции myCollection уже добавлены на карту.
            noPlacemark: true,
            placeholderContent: 'Введите место или аудиторию',
            resultsPerPage: 5,
            //layout: SearchLayout
        }});


    
    


    // Добавляем контрол в верхний правый угол,
    myMap.controls.add(mySearchControl, { 
        float: 'left', 
        // position: {
        //     left: '100px', 
        //     top: '20px'
    //} 
    });

    }


    // Провайдер данных для элемента управления ymaps.control.SearchControl.
    // Осуществляет поиск геообъектов в по массиву points.
    // Реализует интерфейс IGeocodeProvider.
    function CustomSearchProvider(points) {
        this.points = points;
    }

    // Провайдер ищет по полю text стандартным методом String.ptototype.indexOf.
    CustomSearchProvider.prototype.geocode = function (request, options) {
    var deferred = new ymaps.vow.defer(),
        geoObjects = new ymaps.GeoObjectCollection(),
    // Сколько результатов нужно пропустить.
        offset = options.skip || 0,
    // Количество возвращаемых результатов.
        limit = options.results || 20;
        
    var points = [];
    // Ищем в свойстве text каждого элемента массива.
    for (var i = 0, l = this.points.length; i < l; i++) {
        var point = this.points[i];
        if (point.text.toLowerCase().indexOf(request.toLowerCase()) != -1) {
            points.push(point);
        }
    }
    // При формировании ответа можно учитывать offset и limit.
    points = points.splice(offset, limit);
    // Добавляем точки в результирующую коллекцию.
    for (var i = 0, l = points.length; i < l; i++) {
        var point = points[i],
            coords = point.coords,
                    text = point.text;

        geoObjects.add(new ymaps.Placemark(coords, {
            name: text + ' name',
            description: text + ' description',
            balloonContentBody: '<p>' + text + '</p>',
            boundedBy: [coords, coords]
        }));
    }

    deferred.resolve({
        // Геообъекты поисковой выдачи.
        geoObjects: geoObjects,
        // Метаинформация ответа.
        metaData: {
            geocoder: {
                // Строка обработанного запроса.
                request: request,
                // Количество найденных результатов.
                found: geoObjects.getLength(),
                // Количество возвращенных результатов.
                results: limit,
                // Количество пропущенных результатов.
                skip: offset
            }
        }
    });

    // Возвращаем объект-обещание.
    return deferred.promise();

};
