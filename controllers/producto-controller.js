import { productoServicios } from '../service/client-service.js';

const nuevoProducto = (name,imgUrl,price,id) => {
    const card = document.createElement('DIV');
    const contenido = ` <div>
                            <img class="card__imagen" src="${imgUrl}" alt="producto s-w ${id}">    
                        </div>
                        <div class="card__todo">
                            <p class="card__text">${name}</p>
                            <p class="card__price">ARS$ ${price}</p>
                            <a href="producto.html?id=${id}" class="card__enlace">Ver Producto</a>
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
        data.forEach( producto => {
            if(producto.categoria === 'Star Wars') {
                const nuevoPro = nuevoProducto(producto.name,producto.imgUrl,producto.price,producto.id);
                categoriaStarWars.appendChild(nuevoPro);
            }
            if(producto.categoria === 'Consoles') {
                const nuevoPro = nuevoProducto(producto.name,producto.imgUrl,producto.price,producto.id);
                categoriaConsoles.appendChild(nuevoPro);
            }
            if(producto.categoria === 'Various') {
                const nuevoPro = nuevoProducto(producto.name,producto.imgUrl,producto.price,producto.id);
                categoriaVarios.appendChild(nuevoPro);
            }
        });
    })
    .catch( (error) => alert("Ocurrió un error"));