let list = document.querySelectorAll('.menu__list-item');
let shop = document.querySelector('.header__right-circle');
let count = 0;

list.forEach((elem) => {
    elem.addEventListener('click', () => {
        count++
        shop.innerHTML = `${count}`
    });

})

$(function () {




})