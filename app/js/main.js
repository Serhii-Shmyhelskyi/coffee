let list = document.querySelectorAll('.menu__list-item');
let shop = document.querySelector('.header__menu-circle');
let count = 0;

list.forEach((elem) => {
    elem.addEventListener('click', () => {
        count++;
        count > 0 ? shop.classList.add('visible') : true;
        shop.innerHTML = count;
    });

})

$(function () {




})