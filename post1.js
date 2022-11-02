function init() {
                var LAYER_NAME0 = 'user#layer#0',
                    MAP_TYPE_NAME0 = 'user#customMap0',
                    MAX_ZOOM = 3,
                    PIC_WIDTH = 1792,
                    PIC_HEIGHT = 2000,
                    PATH = 'images/tiles1'
            
                var Layer0 = function () {
                    var layer = new ymaps.Layer(PATH + '/%z/%x-%y.jpeg');
                    layer.getZoomRange = function () {
                        return ymaps.vow.resolve([0, 3]);
                    };
                    return layer;
                };
            
                ymaps.layer.storage.add(LAYER_NAME0, Layer0);
                var mapType0 = new ymaps.MapType(MAP_TYPE_NAME0, [LAYER_NAME0]);
                ymaps.mapType.storage.add(MAP_TYPE_NAME0, mapType0);
                var worldSize = Math.pow(2, MAX_ZOOM) * 256;
            
                var myMap1 = new ymaps.Map('map', {
                    center: [0, 0],
                    zoom: 3,
                    controls: [],
                    type: MAP_TYPE_NAME0
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
            myMap1.controls.add(zoomControl);


                // Создаем собственный класс.
                CustomControlClass = function (options) {
                    CustomControlClass.superclass.constructor.call(this, options);
        
                };
            // И наследуем его от collection.Item.
            ymaps.util.augment(CustomControlClass, ymaps.collection.Item, {
                onAddToMap: function (myMap1) {
                    CustomControlClass.superclass.onAddToMap.call(this, myMap1);
                    
                    this.getParent().getChildElement(this).then(this._onGetChildElement, this);
                },
                _onGetChildElement: function (parentDomContainer) {
                    $('<div class="pt-5"><form  method="POST"><div class="pt-2"><input type="submit" name="1" value="1 этаж" class="btn btn-primary " /></div><div class="pt-2"><input type="submit" name="2" value="2 этаж" class="btn btn-primary" /></div><div class="pt-2"><input type="submit" name="3" value="3 этаж" class="btn btn-primary" /></div><div class="pt-2"><input type="submit" name="4" value="4 этаж" class="btn btn-primary" /></div></form></div>').appendTo(parentDomContainer);

                },
        
            });
        
            var customControl = new CustomControlClass();
            myMap1.controls.add(customControl, {
               
                position: {
                    top: 10,
                    left: 10
                }
            });





        //      // Создаем собственный класс.
        //      CustomControlClass1 = function (options) {
        //         CustomControlClass1.superclass.constructor.call(this, options);
    
        //     };
        // // И наследуем его от collection.Item.
        // ymaps.util.augment(CustomControlClass1, ymaps.collection.Item, {
        //     onAddToMap: function (myMap1) {
        //         CustomControlClass1.superclass.onAddToMap.call(this, myMap1);
                
        //         this.getParent().getChildElement(this).then(this._onGetChildElement, this);
        //     },
        //     _onGetChildElement: function (parentDomContainer) {
        //         $('<form><input type="search" class="form-control" placeholder="Найти" aria-label="Search"></form>').appendTo(parentDomContainer);

        //     },
    
        // });
    
        // var customControl1 = new CustomControlClass1();
        // myMap1.controls.add(customControl1, {
           
        //     position: {
        //         top: 10,
        //         left: 10
        //     }
        // });
                

       // Ставим метку в центр координат. Обратите внимание, координаты метки задаются в порядке [y, x].
    var point = new ymaps.Placemark([0, 0], {
        balloonContent: 'Координаты метки: [0, 0]'
    }, {
        preset: 'islands#darkOrangeDotIcon'
    });

    myMap1.geoObjects.add(point);



    var myPlacemark = new ymaps.Placemark([25, 25], {
       
            balloonContentHeader: '<a href = "#">Рога и копыта</a><br>' +
            '<span class="description">Сеть кинотеатров</span>',
        // Зададим содержимое основной части балуна.
        balloonContentBody: '<img src="img/cinema.jpg" height="150" width="200"> <br/> ' +
            '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/>' +
            '<b>Ближайшие сеансы</b> <br/> Сеансов нет.',
        // Зададим содержимое нижней части балуна.
        balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
        // Зададим содержимое всплывающей подсказки.
        hintContent: 'Рога и копыта'
        
    }, {
        preset: 'islands#redDotIcon'
    });

    myMap1.geoObjects.add(myPlacemark);



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


myMap1.geoObjects
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
    //balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
    
    iconContent: "Азербайджан"}
, {
    //preset: "islands#yellowStretchyIcon",
    // Отключаем кнопку закрытия балуна.
    //balloonCloseButton: false,
     // Балун будем открывать и закрывать кликом по иконке метки.
    //hideIconOnBalloonOpen: false
    preset: 'islands#blackStretchyIcon',
});
myMap1.geoObjects.add(placemark);






 // Создаем коллекцию.
 myCollection = new ymaps.GeoObjectCollection(),
 // Создаем массив с данными.
     myPoints = [
         { coords: [70, 100], title: 'Трактир', header: '<span class="description">Сеть трактиров</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"'},
         { coords: [70, 200], title: 'Кафе', header: '<span class="description">Сеть кафе</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"'},
         { coords: [70, 300], title: 'Ресторан', header: '<span class="description">Сеть ресторанов</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"'},
         { coords: [70, 0], title: 'Музей', header: '<span class="description">Сеть музеев</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"'},
         { coords: [70, -100], title: 'Библиотека', header: '<span class="description">Сеть библиотек</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"'},
         
     ];

 // Заполняем коллекцию данными.
 for (var i = 0, l = myPoints.length; i < l; i++) {
     var point = myPoints[i];
     myCollection.add(new ymaps.Placemark(
         point.coords, {
            iconContent: point.title,
            balloonContentHeader: point.header,
            balloonContentBody: point.body,
            balloonContentFooter: point.footer,
         },
         
         {
            preset: "islands#yellowStretchyIcon",
            // Отключаем кнопку закрытия балуна.
            //balloonCloseButton: false,
             // Балун будем открывать и закрывать кликом по иконке метки.
            //hideIconOnBalloonOpen: false
            //preset: 'islands#blackStretchyIcon',
            
        }
     ));
 }

 // Добавляем коллекцию меток на карту.
 myMap1.geoObjects.add(myCollection);

 // Создаем экземпляр класса ymaps.control.SearchControl
 var mySearchControl = new ymaps.control.SearchControl({
     options: {
         // Заменяем стандартный провайдер данных (геокодер) нашим собственным.
         provider: new CustomSearchProvider(myPoints),
         // Не будем показывать еще одну метку при выборе результата поиска,
         // т.к. метки коллекции myCollection уже добавлены на карту.
         noPlacemark: true,
         resultsPerPage: 5
     }});

 // Добавляем контрол в верхний правый угол,
 myMap1.controls
     .add(mySearchControl, { float: 'left' });
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

ymaps.ready(init);