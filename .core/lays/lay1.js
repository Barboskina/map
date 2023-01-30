

ymaps.ready(init);


function init() {
    let newLay = new Lay;
    let createdLevelMap = newLay.create(2, 'tiles3');





    myCollection = new ymaps.GeoObjectCollection();// Создаем коллекцию.
    
    let myPoints = new Array;// Создаем массив с данными.
    for (let i in allPoints) {
        // console.log(allPoints[i].coords[2]);
        if (allPoints[i].coords[2] == 1) myPoints.push(allPoints[i]);
    }
    for (let i in myPoints){
        console.log(myPoints[i]);
    }

    // Заполняем коллекцию данными.
    for (let i = 0, l = myPoints.length; i < l; i++) {
        let point = myPoints[i];
        myCollection.add(new ymaps.Placemark(
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
    createdLevelMap.geoObjects.add(myCollection);// Добавляем коллекцию меток на карту.



    if (x!=null && y!=null){
    createdLevelMap.geoObjects.add(new ymaps.Placemark([x, y], {
        
    }, {
        preset: 'islands#icon',
        iconColor: '#FF0000'
    }));

    createdLevelMap.panTo([x, y]);

    
}


    // Ставим метку в центр координат. Обратите внимание, координаты метки задаются в порядке [y, x].
    let point = new ymaps.Placemark([0, 0], {
        balloonContent: 'Координаты метки: [0, 0]'
    }, {
        preset: 'islands#darkOrangeDotIcon'
    });

    createdLevelMap.geoObjects.add(point);



    let myPlacemark = new ymaps.Placemark([25, 25], {
        balloonContentHeader: `<a href = "#">Рога и копыта</a><br>
            <span class="description">Сеть кинотеатров</span>`,
        balloonContentBody: `<img src="img/cinema.jpg" height="150" width="200"> <br/> 
            <a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.`,
        balloonContentFooter: 'Информация предоставлена:<br/>OOO "Рога и копыта"',
        hintContent: 'Рога и копыта'
        
    }, {
        preset: 'islands#redDotIcon'
    });

    createdLevelMap.geoObjects.add(myPlacemark);


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


    createdLevelMap.geoObjects
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
    let placemark = new ymaps.Placemark([55.75, 37.61], {
        iconContent: "123"}
    , {
        //preset: "islands#yellowStretchyIcon",
        // Отключаем кнопку закрытия балуна.
        //balloonCloseButton: false,
        // Балун будем открывать и закрывать кликом по иконке метки.
        //hideIconOnBalloonOpen: false
        //preset: 'islands#blackStretchyIcon',
    });
    createdLevelMap.geoObjects.add(placemark);

  
};

