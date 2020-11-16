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

    $('.favorite__slider-inner').slick({
        prevArrow: false,
        nextArrow: '<img class ="slider-arrows__right" src="images/right-arrow.svg" alt=""></img>',
    });

    $('.giftset__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        asNavFor: '.giftset__slider-nav'
    });
    $('.giftset__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.giftset__slider',
        dots: true,
        vertical: true,
        centerMode: true,
        focusOnSelect: true
    });

})