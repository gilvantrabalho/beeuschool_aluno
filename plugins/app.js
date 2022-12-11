window.formatDate = function (date = '') {
    let array_date = date.split("-");
    return `${array_date[2]}/${array_date[1]}/${array_date[0]}`;
}