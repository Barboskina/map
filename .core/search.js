    class Search{
    add(createdLevelMap, myPoints){
        // let SearchLayout = ymaps.templateLayoutFactory.createClass([
        //     '<input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"></input>',
        // ].join(''))

        // Создаем экземпляр класса ymaps.control.SearchControl
        let mySearchControl = new ymaps.control.SearchControl({
            options: {
                provider: new CustomSearchProvider(myPoints),// Заменяем стандартный провайдер данных (геокодер) нашим собственным.
                noPlacemark: false,// Не будем показывать еще одну метку при выборе результата поиска, т.к. метки коллекции myCollection уже добавлены на карту.
                placeholderContent: 'Введите место или аудиторию',
                resultsPerPage: 5,
                //layout: SearchLayout
            }
        });

        // Добавляем контрол в верхний правый угол,
        createdLevelMap.controls.add(mySearchControl, {
            float: 'left',
            // position: {
            //     left: '100px', 
            //     top: '20px'
            //} 
        });
    }
}



    // Провайдер данных для элемента управления ymaps.control.SearchControl.
    // Осуществляет поиск геообъектов в по массиву points.
    // Реализует интерфейс IGeocodeProvider.
    function CustomSearchProvider(points) {
        this.points = points;
    }

    // Провайдер ищет по полю text стандартным методом String.ptototype.indexOf.
    CustomSearchProvider.prototype.geocode = function (request, options) {
        let deferred = new ymaps.vow.defer(),
            geoObjects = new ymaps.GeoObjectCollection(),
            offset = options.skip || 0,// Сколько результатов нужно пропустить.
            limit = options.results || 20;// Количество возвращаемых результатов.

        let points = [];let lay;
        // Ищем в свойстве text каждого элемента массива.
        for (let i = 0, l = this.points.length; i < l; i++) {
            let point = this.points[i];
            
            if (point.text.toLowerCase().indexOf(request.toLowerCase()) != -1) {
                console.log(point.coords[2]);
                lay = point.coords[2];
                points.push(point);
                
                
                
                
            }
            
        }

        



        // При формировании ответа можно учитывать offset и limit.
        points = points.splice(offset, limit);
        // Добавляем точки в результирующую коллекцию.
        for (let i = 0, l = points.length; i < l; i++) {
            let point = points[i],
            coords = point.coords,
            text = point.text;
            
            let srcLay = ".core/lays/lay"+lay+".js";
            // console.log(srcLay);
            let oldScript = document.querySelector('#lay');
            oldScript.setAttribute('src', srcLay);
            console.log(oldScript);

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
