// функция удаления карты этажа, используется в поиске и кнопках этажей

const deleteOldLevelMap = () => {
    const parentElement = document.querySelector("#map");
    const childrenElement = document.querySelector("div > ymaps");
    parentElement.removeChild(childrenElement);//удаление старого этажа карты
}

export {deleteOldLevelMap};