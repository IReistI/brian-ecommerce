import { productoServicios } from "../service/client-service.js";
const todosLosProductos = document.querySelector('#products-admin');
todosLosProductos.addEventListener('click', e => {
    if(e.target.classList.contains('admin-card__icon-delete')) {
        const padre = e.target.parentElement.parentElement.parentElement.parentElement;
        const id = padre.lastElementChild.lastElementChild.textContent.replace(/#/g, "");
        productoServicios.eliminarProducto(id)
            .then( (respuesta) => alert('producto eliminado exitosamente') )
            .catch( (error) => alert('no se pudo eliminar el producto'));
    }
});