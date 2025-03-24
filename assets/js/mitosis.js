const mitosis = document.querySelector(".cuentamitosis");
const campos = document.querySelector(".contadorcampos");

cuentamitosis = 0;
contadorcampos = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    cuentamitosis+=1;
    }
    if (event.key === 's') {
    contadorcampos+=1;
    }

    mitosis.innerHTML = cuentamitosis;
    campos.innerHTML = contadorcampos;
});