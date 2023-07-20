// GET
const mostrarProductos = () => fetch("http://localhost:3000/producto").then( respuesta => respuesta.json()).catch( error => console.log(error));

// POST
const crearProducto = (imgUrl, categoria, name, price, descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imgUrl,categoria,name,price,descripcion, id: uuid.v4()}),
    });
};
// DELETE
const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "DELETE",
    });
};
// UPDATE
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
      respuesta.json()
    );
};

const actualizarProducto = (imgUrl, categoria, name, price, descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({imgUrl,categoria,name,price,descripcion}),
    })
        .then( (respuesta) => respuesta)
        .catch( (error) => console.log(error) );
}
export const productoServicios = {
    mostrarProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
};