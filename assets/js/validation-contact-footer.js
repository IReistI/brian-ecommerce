const nombre = document.querySelector('#input-name');
const mensaje = document.querySelector('#textarea');
const formulario = document.querySelector('.form');
const spinner = document.querySelector('.spinner-container');
const datos = {
    nombre: "",
    mensaje: ""
};
cargarListeners();
function cargarListeners() {
    nombre.addEventListener('blur', verificar);
    mensaje.addEventListener('blur', verificar);
    formulario.addEventListener('submit', enviarForm);
};
function verificar(e) {
    if(e.target.value.trim().length > 0) {
        if(e.target.value.trim().length > 40 && e.target.id === 'input-name') {
            datos[e.target.name] = '';
            const ref = e.target.parentElement.parentElement;
            crearAlerta("Máximo 40 caracteres", ref);
            return;
        }
        if(e.target.value.trim().length > 120 && e.target.id === 'textarea') {
            datos[e.target.name] = '';
            const ref = e.target.parentElement.parentElement;
            crearAlerta("Máximo 120 caracteres", ref);
            return;
        }
    }
    if(e.target.value.trim() === '') {
        datos[e.target.name] = '';
        const ref = e.target.parentElement.parentElement;
        crearAlerta(`El campo ${e.target.name} NO puede estar vacio`, ref);
        return;
    };
    limpiartAlerta(e.target.parentElement.parentElement);
    datos[e.target.name] = e.target.value.trim().toLowerCase();
};
function enviarForm(e) {
    e.preventDefault();
    if(!Object.values(datos).includes('')) {
        console.log(datos);
        resetForm();
        console.log(datos);
        spinner.classList.remove('spinner-display');
        setTimeout(() => {
            spinner.classList.add('spinner-display');

            const alertaExito = document.createElement('P');
            alertaExito.classList.add('form__alert-exito');
            alertaExito.textContent = 'Mensaje Enviado Correctamente'
            formulario.appendChild(alertaExito);
            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000);
        return;
    };
};
function crearAlerta(mensaje, referencia) {
    
    limpiartAlerta(referencia);

    const p = document.createElement('P');
    const div = document.createElement('DIV');

    p.textContent = mensaje;
    p.classList.add('form__alert');
    div.classList.add('form__mask--alert');
    div.appendChild(p);

    referencia.appendChild(div);
};
function limpiartAlerta(referencia) {
    const alerta = referencia.querySelector('.form__mask--alert');
    if(alerta) {
        referencia.removeChild(alerta);
    }
};
function resetForm() {
    datos.nombre = '';
    datos.mensaje = '';
    formulario.reset();
};