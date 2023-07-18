const boxImg = document.querySelector('.form-agregar__box');
const urlImg = document.querySelector('#input-url');
const categoria = document.querySelector('#agregar-categoria');
const productoNombre = document.querySelector('#input-producto');
const productoPrecio = document.querySelector('#input-precio');
const productoDescripcion = document.querySelector('#descripcion-textarea');
const agregarForm = document.querySelector('.form-agregar');

cargarListeners();
function cargarListeners() {
    agregarForm.addEventListener('submit', agregarProducto);
    urlImg.addEventListener('blur', verificar);
    productoNombre.addEventListener('blur', verificar);
    productoPrecio.addEventListener('blur', verificar);
    productoDescripcion.addEventListener('blur', verificar);
};
function agregarProducto(e) {
    e.preventDefault();

    const productoArmado = {
        imgUrl: imageUrl || urlImg.value,
        categoriaValor: categoria.value,
        productoValor: productoNombre.value,
        precioValor: productoPrecio.value,
        descripcionValor: productoDescripcion.value,
    };
    
    if(Object.values(productoArmado).includes('')) {
        crearAlerta('Todos los campos son necesarios', agregarForm);
        return;
    } else {
        boxImg.style.backgroundImage = "";
        boxImg.style.border = '1px dashed #464646';
        icon.classList.remove('form-agregar--hidden');
        text.classList.remove('form-agregar--hidden');
        agregarForm.reset();
        limpiarAlerta(agregarForm);
        return;
    }

};
function verificar(e) {
    if(e.target.id === 'input-url' && !validarURL(e.target.value)) {
        const padre = e.target.parentElement.parentElement.parentElement;
        crearAlerta('Introduce una URL valida', padre);
        return;
    };
    if(e.target.value.trim().length > 0) {
        if(e.target.value.trim().length > 20 && e.target.id === 'input-producto') {
            const padre = e.target.parentElement.parentElement.parentElement;
            crearAlerta('Maximo 20 caracteres', padre);
            return;
        }
        if(e.target.value.trim().length > 150 && e.target.id === 'descripcion-textarea') {
            const padre = e.target.parentElement.parentElement.parentElement;	
            crearAlerta('Maximo 150 caracteres', padre);
            return;
        }
    }
    if(e.target.id === 'input-precio' && !validarNumeros(e.target.value)) {
        const padre = e.target.parentElement.parentElement.parentElement;	
        crearAlerta('Solo debes ingresar numeros', padre);
        return;
    }
    limpiarAlerta(e.target.parentElement.parentElement.parentElement);
};
function crearAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);
    const p = document.createElement('P');
    p.textContent = mensaje;
    p.classList.add('form-agregar__alerta');
    if(referencia.classList.contains('form-agregar')) {
        p.style.marginTop = '1rem';
    }
    referencia.appendChild(p);
};
function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector('.form-agregar__alerta');
    if(alerta) {
        referencia.removeChild(alerta);
    }
};
function validarURL(url) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(url);
};

function validarNumeros(numeros) {
    const regex = /^\d+(\.\d{1,2})?$/;
    return regex.test(numeros);
};