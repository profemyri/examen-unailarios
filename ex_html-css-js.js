
//Función principal para los datos del usuario

function validarFormulario(event) {

    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let email = document.getElementById("email").value.trim();
    let direccion = document.getElementById("direccion").value.trim();

    if (!nombre) {
        alert("El campo nombre es obligatorio.");
        return;
    }

    if (!telefono) {
        alert("El campo teléfono es obligatorio.");
        return;
    }

    if (!email) {
        alert("El campo email es obligatorio.");
        return;
    }

    if (!direccion) {
        alert("El campo dirección es obligatorio.");
        return;
    }

    if (!email.includes("@")) {
        alert("El email debe contener el @.");
        return;
    }

    if (telefono.length < 9) {
        alert("El teléfono debe contener solo números y tener 9 dígitos.");
        return;
    }

    if (direccion.length < 15) {
        alert("La dirección debe tener mínimo 15 caracteres.");
        return;
    }

    let confirmacion = confirm("¿Quieres confirmar y enviar tu pedido ahora?");
    if (confirmacion) {
        alert("¡Gracias por tu pedido,"[nombre]);
        event.target.submit();
    } else {
        alert("El pedido no se ha enviado.");
    }
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
