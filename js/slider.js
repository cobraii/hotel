new Swiper('.swiper-container.swiper-hotel-number', {
    slidesPerView: 1,
    spaceBetween: 50,
    speed: 600,
    breakpoints: {
        1024: {
            allowTouchMove: false,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next-hotel-number',
        prevEl: '.swiper-button-prev-hotel-number',
    },
    pagination: {
        el: '.swiper-hotel-number-pagination',
        clickable: true,
    },
});


new Swiper('.swiper-container.swiper-hotel-number-image', {
    loop: true,
    allowTouchMove: false,
    slidesPerView: 'auto',
    spaceBetween: 50,
    speed: 500,
    breakpoints: {
        1024: {
            allowTouchMove: true,
        },
    },
    pagination: {
        el: '.swiper-image-pagination',
        clickable: true,
    },
});

new Swiper('.swiper-container.swiper-gallery', {
    slidesPerView: 1,
    speed: 500,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.swiper-gallery-next',
        prevEl: '.swiper-gallery-prev',
    },
    pagination: {
        el: '.swiper-pagination-gallery',
        clickable: true,
    },
});


document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 767) {
        new Swiper('.swiper-container.swiper-advantages-content', {
            slidesPerView: 'auto',
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-advantages',
                clickable: true,
            },
        });
    }
});



