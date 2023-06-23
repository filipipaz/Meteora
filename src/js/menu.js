const botaoHamburguer = document.querySelector('.menu__btn')
const botaoFechar = document.querySelector('.menu__fechar')
const menuNav = document.querySelector('.menu__hamburguer')

botaoHamburguer.addEventListener('click', () => {
    
    menuNav.classList.toggle('menu__hamburguer__active')
} )

botaoFechar.addEventListener('click', () => {
    menuNav.classList.remove('menu__hamburguer__active')
})
