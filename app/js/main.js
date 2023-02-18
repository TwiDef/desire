$(function() {

    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        /* fade: true */
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.contact-slider').slick({
        slidesPerRow: 10,
        dots: true,
        arrows: false,
        /*         autoplay: true, */
        autoplaySpeed: 3000
    });

    $('.article-slider__box').slick({
        arrows: true,
        /* fade: true */
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/slider/back.svg" alt="left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/slider/next.svg" alt="right"></button>',
    });




    const containerEl = document.querySelector('.gallery__inner');
    let mixer;

    if (containerEl) {
        mixer = mixitup('.gallery__inner', {
            load: {
                filter: '.living'
            }
        });
    }

});