// menu para celular
const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", function () {
    menu.classList.toggle("abierto");
});

// filtro de habitaciones
const formFiltros = document.getElementById("formFiltros");

if (formFiltros) {
    formFiltros.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const distrito = document.getElementById("distrito").value;
        const precioMax = document.getElementById("precioMax").value;
        const soloVerificados = document.getElementById("soloVerificados").checked;

        const tarjetas = document.querySelectorAll(".resultados .tarjeta");
        let encontradas = 0;

        for (let i = 0; i < tarjetas.length; i++) {
            const tarjeta = tarjetas[i];
            let mostrar = true;

            // si no cumple algun filtro se oculta
            if (distrito !== "" && tarjeta.dataset.distrito !== distrito) {
                mostrar = false;
            }
            if (precioMax !== "" && Number(tarjeta.dataset.precio) > Number(precioMax)) {
                mostrar = false;
            }
            if (soloVerificados && tarjeta.dataset.verificado === "no") {
                mostrar = false;
            }

            if (mostrar) {
                tarjeta.style.display = "block";
                encontradas++;
            } else {
                tarjeta.style.display = "none";
            }
        }

        // cuantas quedaron
        document.getElementById("total").textContent = encontradas + " habitación(es) encontrada(s)";
    });
}

// validar login
const formLogin = document.getElementById("formLogin");

if (formLogin) {
    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const correo = document.getElementById("correo").value;
        const clave = document.getElementById("clave").value;
        const mensaje = document.getElementById("mensajeLogin");

        if (correo === "" || clave === "") {
            mensaje.textContent = "Completa tu correo y contraseña.";
        } else if (clave.length < 6) {
            mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        } else {
            mensaje.textContent = "";
            alert("Bienvenido a TAMPU");
        }
    });
}

// validar registro
const formRegistro = document.getElementById("formRegistro");

if (formRegistro) {
    formRegistro.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const dni = document.getElementById("dni").value;
        const clave = document.getElementById("clave").value;
        const clave2 = document.getElementById("clave2").value;
        const mensaje = document.getElementById("mensajeRegistro");

        if (nombre.length < 3) {
            mensaje.textContent = "Escribe tu nombre completo.";
        } else if (dni.length !== 8 || isNaN(dni)) {
            mensaje.textContent = "El DNI debe tener 8 números.";
        } else if (clave.length < 6) {
            mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        } else if (clave !== clave2) {
            mensaje.textContent = "Las contraseñas no coinciden.";
        } else {
            mensaje.textContent = "";
            alert("Cuenta creada");
            formRegistro.reset();
        }
    });
}
