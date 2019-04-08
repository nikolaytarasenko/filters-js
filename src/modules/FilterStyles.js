export const getFilterCSSStyle = () => {
    let filterInputs = document.querySelectorAll('input[type="range"]');
    let filterString = '';

    for (let i = 0; i < filterInputs.length; i++) {
        let id = filterInputs[i].id;
        let value = filterInputs[i].value;

        switch (id) {
            case 'hue':
                filterString += 'hue-rotate(' + value + 'deg) ';
                break;
            case 'blur':
                filterString += id + '(' + value + 'px) ';
                break;
            default:
                filterString += id + '(' + value + '%) ';
        }
    }

    return filterString;
};