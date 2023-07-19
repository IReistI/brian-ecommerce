import { productoServicios } from "../service/client-service.js";

const productosAdmin = (name,imgUrl,price,id) => {
    const card = document.createElement('DIV');
    card.classList.add('admin-card');
    const contenido = `
        <div class="admin-card__img-icons">
            <img class="admin-card__imagen" src="${imgUrl}" alt="producto ${id}">
            <div class="admin-card__icons">
                <img class="admin-card__icon" src="assets/icons/icon-delete.svg" alt="icon delete">
                <img class="admin-card__icon" src="assets/icons/icon-edit.svg" alt="icon edit">
            </div>    
        </div>
        <div class="admin-card__todo">
            <p class="admin-card__text">${name}</p>
            <p class="admin-card__price">ARS$ ${price}</p>
            <p class="admin-card__serie">#${id}</p>
        </div>
    `;
    card.innerHTML = contenido;
    return card;
};
const todosLosProductos = document.querySelector('#products-admin').lastElementChild;

productoServicios.mostrarProductos()
    .then( data => {
        data.forEach( producto => {
            const nuevoPro = productosAdmin(producto.name,producto.imgUrl,producto.price,producto.id);
            todosLosProductos.appendChild(nuevoPro);
        });
    })
    .catch( error => alert('ocurrio un error inesperado') );