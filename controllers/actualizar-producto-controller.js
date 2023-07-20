import { productoServicios } from "../service/client-service.js";
const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');

    if(id === null) {
        alert('ocurrio un error al obtener el producto');
    }
    const imagenUrlCaja = document.querySelector('.form-agregar__box');
    const imagenUrl = document.querySelector('#input-url');
    const categoriaProducto = document.querySelector('#agregar-categoria');
    const nombreProducto = document.querySelector('#input-producto');
    const precioProducto = document.querySelector('#input-precio');
    const descripcionProducto = document.querySelector('#descripcion-textarea');
    const icon = document.querySelector('.form-agregar__img');
    const text = document.querySelector('.form-agregar__text');
    productoServicios.detalleProducto(id).then( producto => {
        imagenUrlCaja.style.backgroundImage = `url('${producto.imgUrl}')`;
        imagenUrlCaja.style.border = 'none';
        icon.classList.add('form-agregar--hidden');
        text.classList.add('form-agregar--hidden');
        imagenUrl.value = producto.imgUrl;
        categoriaProducto.value = producto.categoria;
        nombreProducto.value = producto.name;
        precioProducto.value = producto.price;
        descripcionProducto.value = producto.descripcion;
    });
} 
obtenerInformacion();

const actualizar = (imgobj,categoriaobj,nameobj,priceobj,descripcionobj) => {
    const url = new URL(window.location);
    const id = url.searchParams.get('id');
    const imgUrl = imgobj;
    const categoria = categoriaobj;
    const name = nameobj;
    const price = priceobj;
    const descripcion = descripcionobj;
    productoServicios.actualizarProducto(imgUrl,categoria,name,price,descripcion,id).then( () => {
        window.location.href = 'productos-admin.html';
    }).catch( error => console.log(error));
};
export {actualizar};