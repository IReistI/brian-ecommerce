import {productoServicios} from "../service/client-service.js";

const crear = (imgobj,categoriaobj,nameobj,priceobj,descripcionobj) => {
    const imgUrl = imgobj;
    const categoria = categoriaobj;
    const name = nameobj;
    const price = priceobj;
    const descripcion = descripcionobj;
    productoServicios.crearProducto(imgUrl,categoria,name,price,descripcion).then( () => {
        window.location.href = 'productos-admin.html';
    }).catch( error => console.log(error));
};
export {crear};
