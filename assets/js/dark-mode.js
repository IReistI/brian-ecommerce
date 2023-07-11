const btn = document.querySelector('.btn-img');
const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const a = document.querySelectorAll('.contacto__link');
const pCard = document.querySelectorAll('.card__text');
const textFooter = document.querySelectorAll('p');

document.addEventListener('DOMContentLoaded', () => {
    darkMode();
});
function darkMode() {
    // Comprueba si estaba habilidado dark mode
    let darkLocal = localStorage.getItem('dark');
    if(darkLocal === 'true') {
        btn.src = 'http://127.0.0.1:5500/assets/icons/icon-moon-white.svg';
        document.body.classList.add('body-black');
        document.body.children[0].classList.add('headerFooter-black');
        document.body.children[2].classList.add('contacto-black');
        document.body.children[3].classList.add('headerFooter-black');
        h1.forEach( h1 => h1.classList.add('text-white'));
        h2.forEach( h2 => {
            if(!h2.classList.contains('form-agregar__text')) {
                h2.classList.add('text-white');
            };
        });
        h3.forEach( h3 => h3.classList.add('text-white'));
        a.forEach( a => a.classList.add('text-white'));
        pCard.forEach( p => p.classList.add('text-white'));
        textFooter.forEach( p => p.classList.add('text-white'));
        
    }
    // Añadimos el evento de click al botón de dark mode
    btn.addEventListener('click', darkChange);
}
 
function darkChange() {
    let darkLocal = localStorage.getItem('dark');
    if(darkLocal === null || darkLocal === 'false') {
        // No está inicializado darkLocal o es falso
        localStorage.setItem('dark', true);
        btn.src = 'http://127.0.0.1:5500/assets/icons/icon-moon-white.svg';
        document.body.classList.add('body-black');
        document.body.children[0].classList.add('headerFooter-black');
        document.body.children[2].classList.add('contacto-black');
        document.body.children[3].classList.add('headerFooter-black');
        h1.forEach( h1 => h1.classList.add('text-white'));
        h2.forEach( h2 => {
            if(!h2.classList.contains('form-agregar__text')) {
                h2.classList.add('text-white');
            };
        });
        h3.forEach( h3 => h3.classList.add('text-white'));
        a.forEach( a => a.classList.add('text-white'));
        pCard.forEach( p => p.classList.add('text-white'));
        textFooter.forEach( p => p.classList.add('text-white'));
    } else {
        // Está activado darkMode, por lo que se desactiva
        localStorage.setItem('dark', false);
        btn.src = 'http://127.0.0.1:5500/assets/icons/icon-moon.svg'
        document.body.classList.remove('body-black');
        document.body.children[0].classList.remove('headerFooter-black');
        document.body.children[2].classList.remove('contacto-black');
        document.body.children[3].classList.remove('headerFooter-black');
        h1.forEach( h1 => h1.classList.remove('text-white'));
        h2.forEach( h2 => {
            if(!h2.classList.contains('form-agregar__text')) {
                h2.classList.remove('text-white');
            };
        });
        h3.forEach( h3 => h3.classList.remove('text-white'));
        a.forEach( a => a.classList.remove('text-white'));
        pCard.forEach( p => p.classList.remove('text-white'));
        textFooter.forEach( p => p.classList.remove('text-white'));
    }
}