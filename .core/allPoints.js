//y,x,z

let allPoints = [
    /*{ number: 0, coords: [70, 0, 1], value: 'Музей', header: '<span class="description">Музей</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"', preset: 'islands#lightBlueStretchyIcon'},
    { number: 1, coords: [120, 300, 1], value: '3_06А', iconLayout: 'default#imageWithContent', iconImageHref: 'icons.png', iconImageSize: [48, 60], iconImageOffset: [-24, -24], iconContentOffset: [15, 15]},
    { number: 2, coords: [70, 300, 2], value: 'Гардероб', header: '<span class="description">Гардероб</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"',preset: 'islands#lightBlueStretchyIcon'},
    { number: 3, coords: [70, -100, 2], value: 'Библиотека', header: '<span class="description">Библиотека</span>', body: '<a href="tel:+7-123-456-78-90">+7 (123) 456-78-90</a><br/><b>Ближайшие сеансы</b> <br/> Сеансов нет.', footer: 'Информация предоставлена:<br/>OOO "Рога и копыта"',preset: 'islands#lightBlueStretchyIcon'},
    { number: 4, coords: [100, 120, 2], value: 'Спортивный зал', header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon'},
    */
/////3 этаж
    { number: 0, coords: [125, -330, 3], value: 'Столовая', zoom: 1, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon'},
    { number: 1, coords: [80, 0, 3], value: '4_29Г', zoom: 1, iconLayout: 'default#image'},
    { number: 2, coords: [110, 0, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 3, coords: [140, 150, 3],value: 'Физ.кафедра', zoom: 1, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon'},
    { number: 4, coords: [125, 150, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 5, coords: [-160, -20, 3], value: 'Деканат ИМИТа', zoom: 1, header: 'Деканат ИМИТа', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 6, coords: [-135, -20, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 7, coords: [-103, -120, 3], value: 'Женский туалет, 3 этаж, корпус Б', zoom: 1, header: 'Женский туалет', iconLayout: 'default#image' },//, iconImageHref: 'img/icons.png'с
    { number: 8, coords: [-103, -130, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 9, coords: [-101, 123, 3], value: 'Мужской туалет, 3 этаж, корпус В', zoom: 1, header: 'Мужской туалет', body: '', iconLayout: 'default#image' },
    { number: 10, coords: [-101, 138, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 11, coords: [100, 123, 3], value: 'Женский туалет, 3 этаж, корпус В', zoom: 1, header: 'Женский туалет', body: '', iconLayout: 'default#image' },
    { number: 12, coords: [100, 138, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 13, coords: [5, -120, 3], value: 'Коворкинг, 3 этаж, корпус Б', zoom: 1, header: '', body: '', iconLayout: 'default#image' },
    { number: 14, coords: [5, -130, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 15, coords: [170, -270, 3], value: 'Буфет, корпус Д', zoom: 1, header: 'Буфет Конфетки-Бараночки', body: '', iconLayout: 'default#image' },
    { number: 16, coords: [125, -270, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 17, coords: [195, -230, 3], value: '', zoom: 1, header: 'Туалет, 3 этаж, корпус Д', body: '', iconLayout: 'default#image' },
    { number: 18, coords: [125, -230, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 19, coords: [190, 230, 3], value: 'Раздевалка Женская', zoom: 1, header: 'Раздевалка Женская', zoom: 1, iconLayout: 'default#image' },
    { number: 20, coords: [125, 230, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 21, coords: [-160, 65, 3], value: '3_06А', zoom: 1, header: 'Кафедка КНЭМ', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 22, coords: [-135, 65, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 23, coords: [-160, 150, 3], value: '3_02А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 24, coords: [-135, 150, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 25, coords: [-170, 125, 3], value: '3_03А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 26, coords: [-135, 125, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 27, coords: [-160, 105, 3], value: '3_04А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 28, coords: [-135, 105, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 29, coords: [-170, 80, 3], value: '3_05А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 30, coords: [-135, 80, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 31, coords: [-170, 170, 3], value: '3_01А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 32, coords: [-135, 170, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 33, coords: [-170, 45, 3], value: '3_07А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 34, coords: [-135, 45, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 35, coords: [-160, 20, 3], value: '3_08А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 36, coords: [-135, 20, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 37, coords: [-170, 5, 3], value: '33_08А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 38, coords: [-135, 5, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 39, coords: [-160, -165, 3], value: '3_20А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 40, coords: [-135, -165, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 41, coords: [-170, -145, 3], value: '3_19А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 42, coords: [-135, -145, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 43, coords: [-160, -120, 3], value: '3_18А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 44, coords: [-135, -120, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 45, coords: [-170, -100, 3], value: '3_17А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 46, coords: [-135, -100, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 47, coords: [-160, -85, 3], value: '3_16А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 48, coords: [-135, -85, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 49, coords: [-170, -75, 3], value: '3_15А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 50, coords: [-135, -75, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 51, coords: [-160, -60, 3], value: '3_14А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 52, coords: [-135, -60, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 53, coords: [-170, -40, 3], value: '3_13А', zoom: 3, header: '', body: '', footer: '', preset: 'islands#lightBlueStretchyIcon' },
    { number: 54, coords: [-135, -40, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 55, coords: [-115, -140, 3], value: 'Лифт', zoom: 1, preset: 'islands#lightBlueStretchyIcon' },
    { number: 56, coords: [-115, -130, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    
    
    { number: 57, coords: [125, 140, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 58, coords: [-115, 5, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },

    { number: 59, coords: [125, 0, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 60, coords: [125, -130, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 61, coords: [-135, 140, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 62, coords: [-135, -130, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 63, coords: [-170, -130, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 64, coords: [-170, 140, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 65, coords: [150, 140, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 66, coords: [150, -130, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 67, coords: [-115, -30, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 68, coords: [-115, 35, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 69, coords: [115, 235, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },
    { number: 70, coords: [140, -305, 3], value: '', zoom: 1, iconLayout: 'default#image', iconImageHref: 'img/icons.png' },



];

export {allPoints};



