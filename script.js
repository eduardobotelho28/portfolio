let header = document.querySelector('#header')
document.addEventListener('scroll', () => {

    if(window.scrollY > 400) header.style.background = '#8b3546'

    else header.style.background = 'transparent'
    
})

function handleWidth () {
    let getWidth = window.innerWidth || document.documentElement.clientWidth

    let slideShow = 3

    if(getWidth < 1001)
        slideShow = 2
    if(getWidth < 701)
        slideShow = 1

    return slideShow 
}

function createSwiper (container, pagination, nextButton, prevButton) {
    return new Swiper (container, {
        slidesPerView: handleWidth(),
        spaceBetween:30,
        pagination: {
            el: pagination,
            clickable:true
        },
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton
        },
    });
}

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev")

window.addEventListener('resize', () => {
    swiper.params.slidesPerView = handleWidth()
    swiper.update()
})

const menuHamburguer = document.querySelector('.menu-hamburguer')
const nav            = document.querySelector('.navBar')
const links          = document.querySelectorAll('.navbar-links li a')

menuHamburguer.addEventListener('click', ()=> {
    nav.classList.toggle('active')
})

links.forEach( link => {
    link.addEventListener('click', () => {
        nav.classList.toggle('active')
    })
})