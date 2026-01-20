// js/auth-check.js

document.addEventListener('DOMContentLoaded', function() {
    const nombre = localStorage.getItem("usuarioNombre");

    if (!nombre) {
        // Si no hay sesión → redirigir al login
        window.location.href = "../index.html";
    } else {
        // Mostrar el nombre del usuario en el elemento correspondiente
        const nombreElement = document.getElementById("nombreUsuario");
        if (nombreElement) {
            nombreElement.textContent = nombre;
        }
    }
});