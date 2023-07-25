import { productoServicios } from "../service/client-service.js";
const url = new URL(window.location);
const id = url.searchParams.get('id');

productoServicios.detalleProducto(id)
    .then( respuesta => mostrarInformacion(respuesta) )
    .catch( error => alert('no se pudo mostrar el producto esperado') )
function mostrarInformacion(producto) {
    const {imgUrl, name, categoria, price, descripcion} = producto;
    const main = document.querySelector('.grid');
    const img = document.createElement('IMG');
    const div = document.createElement('DIV');
    img.src = imgUrl;
    img.alt = `producto ${categoria}`;
    img.classList.add('hero-producto__imagen');
    div.classList.add('producto__container');
    div.innerHTML = `<h1 class="producto-title">${name}</h1>
    <p class="producto-precio">$${price}</p>
    <p class="producto-descripcion">${descripcion}</p>`
    main.appendChild(img);
    main.appendChild(div);

    productosSimilares();  
};
const similares = (name,imgUrl,price,id) => {
    const card = document.createElement('DIV');
    card.classList.add('producto__card');
    card.innerHTML = `
    <div>
        <img class="producto-card__imagen" src="${imgUrl}" alt="producto ${id}">    
    </div>
    <div class="producto-card__todo">
        <p class="producto-card__text">${name}</p>
        <p class="producto-card__price">ARS$ ${price}</p>
        <a href="ver-producto.html?id=${id}" class="producto-card__enlace">Ver Producto</a>
    </div>
    `;
    return card;
}
const productosSimilares = () => {
    const insertarSimilares = document.querySelector('.producto__grid');
    const img = document.querySelector('.hero-producto__imagen');
    const alt = img.alt;
    const categoria = alt.substring(alt.indexOf(' ') + 1);
    
    productoServicios.mostrarProductos()
        .then( data => {
            let cont = 0;
            data.forEach( dato => {
                if(dato.categoria === categoria && dato.id !== id && cont < 6) {
                    const creaSimilar = similares(dato.name,dato.imgUrl,dato.price,dato.id);
                    insertarSimilares.appendChild(creaSimilar);
                    cont++;
                }
            });
        });
}