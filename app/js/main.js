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

    $('.menu__btn').on('click', function () {
        $('.header__menu').slideToggle();
    });

    $('.favorite__slider-inner').slick({
        prevArrow: false,
        nextArrow: '<img class ="slider-arrows__right" src="images/right-arrow.svg" alt=""></img>',
    });

    $('.favorite__slider-inner--2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: '<img class ="slider-arrows__right" src="images/right-arrow.svg" alt=""></img>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
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
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    vertical: false,
                }
            }
        ]
    });

})