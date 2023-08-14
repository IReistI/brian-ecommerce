import { productoServicios } from "../service/client-service.js";
const url = new URL(window.location);
const id = url.searchParams.get('categoria');

const crearProductoCategoria = (name,imgUrl,price,id) => {
    const card = document.createElement('DIV');
    const contenido = ` 
                    <div>
                        <img class="todo-card__imagen" src="${imgUrl}" alt="producto s-w 1">    
                    </div>
                    <div class="todo-card__todo">
                        <p class="todo-card__text">${name}</p>
                        <p class="todo-card__price">ARS$ ${price}</p>
                        <a href="ver-producto.html?id=${id}" target="_blank" class="todo-card__enlace">Ver Producto</a>
                    </div>`;
    card.classList.add('todo-card');
    card.innerHTML = contenido;
    return card;
};
const title = document.querySelector('.todo-title span');
const todo = document.querySelector('.todo');
title.textContent = id;
productoServicios.mostrarProductos()
    .then( data => {
        data.forEach(producto => {
            if(producto.categoria === id) {
                const nuevoPro = crearProductoCategoria(producto.name, producto.imgUrl, producto.price, producto.id);
                todo.appendChild(nuevoPro);
                return;
            }
        });
    })