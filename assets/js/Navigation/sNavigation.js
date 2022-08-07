const sNav = document.querySelector('.sNav')
const sNavState = document.querySelector('.small-state')

sNavState.addEventListener('click', () => {
    sNav.classList.toggle('wide')
})