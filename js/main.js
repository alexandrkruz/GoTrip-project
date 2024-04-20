var owl = $('.owl-carousel');
owl.owlCarousel(
    {
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
        items: 3,
        responsive : { 
            1000 : {
                margin: 20,
            },

                1200 : {
                    margin: 30,
            }
        }
    }
);



$('.slider__btn--prew').click(function() {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav')

navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
};



