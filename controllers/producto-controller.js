import { productoServicios } from '../service/client-service.js';
import { verificarDarkMode } from '../assets/js/dark-mode.js';
const crearCategorias = () => {
    const catStarWars = document.querySelector('.star-wars__head');
    const catConsoles = document.querySelector('.consoles__head');
    const catVarious = document.querySelector('.various__head');
    catStarWars.appendChild(creaCategoria('star-wars__enlaces', 'Star Wars'));                
    catConsoles.appendChild(creaCategoria('consoles__enlaces', 'Consoles'));
    catVarious.appendChild(creaCategoria('various__enlaces', 'Various'));
};
function creaCategoria(clase, categoria) {
    const div = document.createElement('DIV');
    div.classList.add(clase);
    div.innerHTML = `
                    <a href="todo.html?categoria=${categoria}" class="star-wars__enlace" id="btn-verTodo">Ver Todo</a>
                    <a href="todo.html?categoria=${categoria}" class="star-wars__icon"><img src="assets/icons/icon-arrow-blue.svg" alt="ir a todo"></a>
                    `
    return div;
};
crearCategorias();
const nuevoProducto = (name,imgUrl,price,id) => {
    const card = document.createElement('DIV');
    const contenido = ` <div>
                            <img class="card__imagen" src="${imgUrl}" alt="producto s-w ${id}">    
                        </div>
                        <div class="card__todo">
                            <p class="card__text">${name}</p>
                            <p class="card__price">ARS$ ${price}</p>
                            <a href="ver-producto.html?id=${id}" target="_blank" class="card__enlace">Ver Producto</a>
                        </div>`;
    card.classList.add('card');
    card.innerHTML = contenido;
    card.dataset.id = id;
    return card;
};

const categoriaStarWars = document.querySelector('#star-wars').lastElementChild;
const categoriaConsoles = document.querySelector('#consoles').lastElementChild;
const categoriaVarios = document.querySelector('#various').lastElementChild;
productoServicios
    .mostrarProductos()
    .then( (data) => {
        let cont = 0;
        let cont2 = 0;
        let cont3 = 0;
        data.forEach( producto => {
            
            if(producto.categoria === 'Star Wars' && cont < 6) {
                const nuevoPro = nuevoProducto(producto.name,producto.imgUrl,producto.price,producto.id);
                categoriaStarWars.appendChild(nuevoPro);
                cont++;
            }
            if(producto.categoria === 'Consoles' && cont2 < 6) {
                const nuevoPro = nuevoProducto(producto.name,producto.imgUrl,producto.price,producto.id);
                categoriaConsoles.appendChild(nuevoPro);
                cont2++;
            }
            if(producto.categoria === 'Various' && cont3 < 6) {
                const nuevoPro = nuevoProducto(producto.name,producto.imgUrl,producto.price,producto.id);
                categoriaVarios.appendChild(nuevoPro);
                cont3++;
            }
        });
    })
    .catch( (error) => alert("Ocurrió un error"));
verificarDarkMode();