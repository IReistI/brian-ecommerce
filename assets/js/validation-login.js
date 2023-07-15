const email = document.querySelector('#login-email');
const contraseña = document.querySelector('#login-password');
const btnLogin = document.querySelector('[data-button-login]');
const form = document.querySelector('.form-login');
const correo = {
    email: '',
    password: '',
};

cargarListeners();
function cargarListeners() {
    email.addEventListener('blur', verificar);
    contraseña.addEventListener('blur', verificar);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        resetearForm();
        window.location.href = 'productos-admin.html';
    });
};
function verificar(e) {
    if(e.target.value.trim() === '') {
        correo[e.target.name] = '';
        const ref = e.target.parentElement.parentElement;
        crearAlerta(`El campo ${e.target.name} NO puede estar vacio`, ref);
        botonVerificar();
        return;
    }
    if(e.target.id === 'login-email' && !validarEmail(e.target.value)) {
        correo[e.target.name] = '';
        crearAlerta('El email no es valido', e.target.parentElement.parentElement);
        botonVerificar();
        return;
    }
    correo[e.target.name] = e.target.value.trim().toLowerCase();
    botonVerificar();
    limpiartAlerta(e.target.parentElement.parentElement);
};
function crearAlerta(mensaje, referencia) {
    
    limpiartAlerta(referencia);

    const p = document.createElement('P');

    p.textContent = mensaje;
    p.classList.add('form-login__alert');

    referencia.appendChild(p);
};
function limpiartAlerta(referencia) {
    const alerta = referencia.querySelector('.form-login__alert');
    if(alerta) {
        referencia.removeChild(alerta);
    }
};
function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email);
    return resultado;
};
function botonVerificar() {
    if(!Object.values(correo).includes('')) {
        btnLogin.classList.remove('opacity');
        btnLogin.style.cursor  = 'pointer';
        btnLogin.disabled = false;
        return;
    } else {
        btnLogin.classList.add('opacity');
        btnLogin.style.cursor = 'text';
        btnLogin.disabled = true;
        return;
    }
};
function resetearForm() {
    form.reset();
    Object.keys(correo).forEach( i => correo[i] = '' );
    botonVerificar();
}