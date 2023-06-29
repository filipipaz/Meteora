const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    centeredSlides: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});