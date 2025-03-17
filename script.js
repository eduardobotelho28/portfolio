let header = document.querySelector('#header')

document.addEventListener('scroll', () => {

    if(window.scrollY > 400) header.style.background = '#8b3546'

    else header.style.background = 'transparent'
    
})

let swiper = new Swiper (".mySwiper", {
    slidesPerView:3,
    spaceBetween:30,
    pagination: {
        el: ".swiper-pagination",
        clickable:true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});