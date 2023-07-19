// GET
const mostrarProductos = () => fetch("http://localhost:3000/producto").then( respuesta => respuesta.json()).catch( error => console.log(error));

export const productoServicios = {
    mostrarProductos,
};