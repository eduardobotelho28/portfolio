let header = document.querySelector('#header')

document.addEventListener('scroll', () => {

    if(window.scrollY > 400) header.style.background = '#8b3546'

    else header.style.background = 'transparent'
    
})