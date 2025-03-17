
//Función principal para los datos del usuario

let formulario=document.getElementById("formulario");

let nombre=document.getElementById.trim(("nombre"));
let direccion=document.getElementById.trim(("direccion"));
let telefono=document.getElementById.trim(("telefono"));
let email=document.getElementById.trim(("email"));

formulario.onsubmit(){

    if(nombre.value.trim().===" "){
        alert("El campo nombre es incorrecto.");
        return;
    };

    if(direccion.value.trim().length<15){
        alert("El campo dirección es menor de 15.");
        return;
    };

    if(isNaN(telefono)){
        alert("El campo teléfono es incorrecto.");
        return;
    };

    if(telefono.value.trim().length<9){
        alert("El campo teléfono es incorrecto. Tiene pocos dígitos");
        return;
    };

    if(!email.contains("@")){
        alert("El campo email es incorrecto.");
        return;
    };
}

let preciosHamburguesa = {
    clasica: 5,
    bbq: 7,
    especial: 8
};

let preciosIngredientes = {
    bacon: 1,
    queso: 1,
    huevo: 1,
    patatas: 1
};

function calcularPrecio() {
    let tipohamburguesa = document.querySelector('input[name="tipo-hamburguesa"]:checked');
    let preciosHamburguesa = tipohamburguesa ? preciosHamburguesa[tipohamburguesa.value] : 0;

    let ingredientesadicional = document.querySelectorAll('input[name="extra"]:checked');
    let precioIngredientes = 0;
    ingredientesadicional.forEach(ingrediente => {
        precioIngredientes += preciosIngredientes[ingrediente.value];
    });

    let precioTotal = preciosHamburguesa + precioIngredientes;

    document.getElementById("precio_total").textContent = `Precio total: ${precioTotal.toFixed(2)}€`;
}
