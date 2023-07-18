const boxAgregar = document.querySelector('.form-agregar__box');
const btnSearch = document.querySelector('#fileElem');
const icon = document.querySelector('.form-agregar__img');
const text = document.querySelector('.form-agregar__text');
let imageUrl = '';
cargarListeners();
function cargarListeners() {
    boxAgregar.addEventListener('dragover', handleDragOver, false);
    boxAgregar.addEventListener('dragleave', handleDragLeave, false);
    boxAgregar.addEventListener('drop', handleDrop, false);
    btnSearch.addEventListener('change', (e) => {
        const files = e.target.files;
        handleFiles(files);
    });
};
function handleDragOver(e) {
    e.preventDefault();
    boxAgregar.classList.add('dragover');
};
function handleDragLeave(e) {
    e.preventDefault();
    boxAgregar.classList.remove('dragover');
};
function handleDrop(e) {
    e.preventDefault();
    boxAgregar.classList.remove('dragover');
    const files = e.dataTransfer.files;
    handleFiles(files);
};
function handleFiles(files) {
    for( let i = 0; i < files.length ;i++ ) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = e => {
            boxAgregar.style.backgroundImage = `url('${e.target.result}')`;
            boxAgregar.style.border = 'none';
            icon.classList.add('form-agregar--hidden');
            text.classList.add('form-agregar--hidden');
            imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
    }
};