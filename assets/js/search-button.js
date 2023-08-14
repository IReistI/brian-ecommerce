const btnSearch = document.querySelector('.nav__icono');
const agregarDisplay = document.querySelector('.search');
btnSearch.addEventListener('click', e => {
    agregarDisplay.parentElement.classList.toggle('nav__busqueda--display');
});
window.addEventListener('resize', () => {
    const existe = agregarDisplay.parentElement;
    if(!existe.classList.contains('nav__busqueda--display')) {
        if(window.innerWidth > 768) {
            agregarDisplay.parentElement.classList.add('nav__busqueda--display');
        }
    }
});