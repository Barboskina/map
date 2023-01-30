<?php
echo("

const scriptForLays = document.createElement('script');
scriptForLays.src = './.core/classLay.js';
document.head.appendChild(scriptForLays);

const scriptForLevelButtons = document.createElement('script');
scriptForLevelButtons.src = './.core/classLevelButtons.js';
document.head.appendChild(scriptForLevelButtons);

ymaps.ready(init);

function init() {
    let newLay = new Lay;
    let createdLevelMap = newLay.create(2, 'tiles3');

    let levelButtons = new LevelButtons;
    levelButtons.add(createdLevelMap);

    let placemark = new ymaps.Placemark([200, 200], {
        
        iconContent:`<div style=\"with: 100px;\">4_08А</div>`}
    , {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'icons.png',
        // Отключаем кнопку закрытия балуна.
        balloonCloseButton: false,
         // Балун будем открывать и закрывать кликом по иконке метки.
        hideIconOnBalloonOpen: false
    });
    createdLevelMap.geoObjects.add(placemark);

    placemark.options.set('preset', \"islands#redStretchyIcon\");

    
   
};

");
?>