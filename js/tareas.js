function agregarTarea() {
    let texto = document.getElementById("tarea").value.trim();
    let prioridad = document.getElementById("prioridad").value;

    if (texto === "") {
        alert("Por favor escribe una tarea");
        return;
    }

    let li = document.createElement("li");
    li.className = "tarea " + prioridad;
    li.innerHTML = `
        <span>${texto} (${prioridad})</span>
        <div class="acciones">
            <button class="btn-editar" onclick="editarTarea(this)">Editar</button>
            <button class="btn-eliminar" onclick="eliminarTarea(this)">Eliminar</button>
        </div>
    `;

    document.getElementById("lista").appendChild(li);
    document.getElementById("tarea").value = "";
}

function editarTarea(btn) {
    let li = btn.parentElement.parentElement;
    let textoActual = li.querySelector("span").textContent.split(" (")[0];
    let nuevoTexto = prompt("Editar tarea:", textoActual);
    
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        let prioridad = li.className.split(" ")[1];
        li.querySelector("span").textContent = nuevoTexto.trim() + " (" + prioridad + ")";
    }
}

function eliminarTarea(btn) {
    let li = btn.parentElement.parentElement;
    li.remove();
}