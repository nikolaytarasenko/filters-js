import { getFilterCSSStyle } from './modules/FilterStyles';

class FilterApp {
    constructor() {
        this.filtersInit();
    }

    filtersInit() {
        let filterInputs = document.querySelectorAll('input[type="range"]');

        for (let i = 0; i < filterInputs.length; i++) {
            filterInputs[i].addEventListener('input', this.showFilterValue);
        }
    };

    showFilterValue(e) {
        // отображаем значение для текущего input
        let parent = e.target.parentNode;
        let filterValue = parent.querySelector('.settings__value');
        filterValue.textContent = e.target.value;

        // получаем строку стилей для фильтра со всех input'ов
        let filterStyles = getFilterCSSStyle();

        // применяем стили для контейнера, который содержит рисунок
        // (НУЖНО ВЫНЕСТИ В ОТДЕЛЬНЫЙ МОДУЛЬ)
        let imageContainer = document.querySelector('.img-container');
        imageContainer.style.filter = filterStyles;
    }

    resetFilters() {
        let defaultFilter = 'blur(0px) brightness(100%) contrast(100%) saturate(100%) hue-rotate(0deg) sepia(0%)';
        let imageContainer = document.querySelector('.img-container');

        imageContainer.style.filter = defaultFilter;
        //imageContainer.style.operaFilter = defaultFilter;
    }
}

let app = new FilterApp();

/*let defaultStyles = {
    blur: 0,
    brightness: 100,
    contrast: 100,
    saturate: 100,
    sepia: 0
};*/

let defaultStyles = [100, 100, 100, 0, 0, 0];


// reset button
let resetButton = document.getElementById('reset__button');

resetButton.addEventListener('click', () => {
    let filterTitleValues = document.querySelectorAll('.settings__value');

    for (let i = 0; i < filterTitleValues.length; i++) {
        filterTitleValues[i].textContent = defaultStyles[i];
    }

    let blur = document.getElementById('blur');
    blur.value = 0;

    let brightness = document.getElementById('brightness');
    brightness.value = 100;

    let contrast = document.getElementById('contrast');
    contrast.value = 100;

    let saturate = document.getElementById('saturate');
    saturate.value = 100;

    let hue = document.getElementById('hue');
    hue.value = 0;

    let sepia = document.getElementById('sepia');
    sepia.value = 0;

    app.resetFilters();
});

// add image url
let imageUrlInput = document.getElementById('img-url-input');
let imageUrlButton = document.getElementById('img-url-btn');


imageUrlButton.addEventListener('click', (e) => {
    let imageUrlInputValue = imageUrlInput.value;
    let mainImg = document.getElementById('main-img');
    mainImg.style.backgroundImage = '';
    setTimeout(() => {
        mainImg.outerHTML = '<div class="img" id="main-img" style="background-image: url(' + imageUrlInputValue + ');"></div>';
        imageUrlInput.value = '';
    }, 1000);
});