// // Создаем многоугольник, используя вспомогательный класс Polygon.
    // let myPolygon = new ymaps.Polygon([
    //     // Указываем координаты вершин многоугольника.
    //     [
    //         [100, 100],
    //         [360, 100],
    //         [360, 400],
    //         [400, 360],
    //         [100, 400]
    //     ]
    // ], {
    //     // Описываем свойства геообъекта.
    //     // Содержимое балуна.
    //     hintContent: "4-29Г",
    //     balloonContent: "4-29Г",
    // }, {
    //     // Задаем опции геообъекта.
    //     // Цвет заливки.
    //     //fillColor: '#00FF0088',
    //     // Ширина обводки.
    //     strokeWidth: 1,
    //     fillOpacity: 0,
    //     strokeColor: '#000000'
    //     //opacity: 0
    // });

    // // Добавляем многоугольник на карту.
    // createdMap.geoObjects.add(myPolygon);


    // // Создаём макет содержимого.
    // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    //     '<div style="color: #FF0000; font-weight: bold; ">$[properties.iconContent]</div>'
    // ),

    // myPlacemarkWithContent = new ymaps.Placemark([200, 200], {
    //     //hintContent: '4-06Б',
    //     //balloonContent: '4-06Б',
    //     iconContent: '4.29Г'
    // }, {
    //     // Опции.
    //     // Необходимо указать данный тип макета.
    //     iconLayout: 'default#imageWithContent',
    //     // Своё изображение иконки метки.
    //     iconImageHref: 'icons.png',
    //     // Размеры метки.
    //     // iconImageSize: [48, 60],
    //     // // Смещение левого верхнего угла иконки относительно
    //     // // её "ножки" (точки привязки).
    //     // iconImageOffset: [-24, -24],
    //     // // Смещение слоя с содержимым относительно слоя с картинкой.
    //     // iconContentOffset: [15, 15],
    //     // // Макет содержимого.
    //     iconContentLayout: MyIconContentLayout
    // });

    // createdMap.geoObjects.add(myPlacemarkWithContent);






    // let inputFrom = document.querySelector("#from").value; // данные, которые ввел пользователь
    //     let inputTo = document.querySelector("#to").value; // данные, которые ввел пользователь

    //     let IndexPointFrom = allPoints.findIndex(item => item.text == inputFrom);// в массиве всех данных ищем индекс объекта
    //     let IndexPointTo = allPoints.findIndex(item => item.text == inputTo);// в массиве всех данных ищем индекс объекта
        
    //     let levelFrom = allPoints[IndexPointFrom].coords[2]; // узнаем этаж
    //     let levelTo = allPoints[IndexPointTo].coords[2]; // узнаем этаж

    //     mapLoad(levelFrom);//создаем карту этажа-начала

    //     if (levelFrom == levelTo) {//маршрут на одном этаже
    //         massOfCoords = [];
    //         let path = [];
    //         const n = allPoints.length, //кол-во точек
    //             m = allEdges.length; //кол-во ребер
    //         const INF = 1000000000;
        
    //         let d = Array(n).fill(INF);//массив длин дорог, изначально заполненный бесконечностями
    //         d[IndexPointFrom] = 0;
    
    //         let p = Array(n).fill(-1);;//массив предков, изначально заполненный -1
        
    //         for (;;) {
    //             let any = false;
    //             for (let j=0; j<m; ++j)
    //                 if (d[allEdges[j].begin] < INF)
    //                     if (d[allEdges[j].end] > d[allEdges[j].begin] + allEdges[j].value) {
    //                         d[allEdges[j].end] = d[allEdges[j].begin] + allEdges[j].value;
    //                         p[allEdges[j].end] = allEdges[j].begin;
    //                         any = true;
    //                     }
    //                     else if (d[allEdges[j].begin] > d[allEdges[j].end] + allEdges[j].value) {
    //                         d[allEdges[j].begin] = d[allEdges[j].end] + allEdges[j].value;
    //                         p[allEdges[j].begin] = allEdges[j].end;
    //                         any = true;
    //                     }
    //             if (!any)  break;
    //         }
        
    //         if (d[IndexPointTo] == INF)
    //             console.log("No path from ", IndexPointFrom ," to ", IndexPointTo, ".");
    //         else {
    //             for (let cur=IndexPointTo; cur!=-1; cur=p[cur]) {
    //                 path.push(cur);
    //             }
    //             path.reverse();
        
    //             console.log("Path from ", IndexPointFrom, " to ", IndexPointTo, ": ");
        
    //             for (let i=0; i<path.length; ++i) {
    //                 massOfCoords.push(allPoints[path[i]].coords);
    //                 console.log(path[i]);
    //             }
    //             console.log(massOfCoords);
    //         }
        












    
// var myButton =
// new ymaps.control.Button(
//   '<b>1 этаж</b>'
// );
// myButton.events
// .add(
//   'press',
//   function () {
//     alert('Щелк');
//   }
// )
// .add(
//   'select',
//   function () {
//     deleteOldLevelMap();
//     ymaps.ready(createLevelMap2);//показ карты нового этажа

//   }
// )
// .add(
//   'deselect',
//   function () {
//     alert('Отжата');
//   }
// );
// createdMap.controls.add(myButton, {
// float: "left"
// });

// };