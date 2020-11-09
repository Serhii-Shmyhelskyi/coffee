let list = document.querySelectorAll('.menu__list-item');
let shop = document.querySelector('.header__right-circle');
let count = 0;
console.dir(shop);
console.log(list);

list.forEach((elem) => {
    elem.addEventListener('click', () => {
        count++
        shop.innerHTML = `${count}`
    });

})

$(function () {




})