function guardarDatos() {
    var id = document.getElementById('id').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var curso = document.getElementById('curso').value;
    var codigoCurso = document.getElementById('codigoCurso').value;
    var descripcion = document.getElementById('descripcion').value;

    var datos = {
        id: id,
        nombre: nombre,
        apellido: apellido,
        curso: curso,
        codigoCurso: codigoCurso,
        descripcion: descripcion
    };

    var almacenamiento = JSON.parse(localStorage.getItem('datos')) || [];

    almacenamiento.push(datos);

    localStorage.setItem('datos', JSON.stringify(almacenamiento));

    document.getElementById('dataForm').reset();

    mostrarDatos();
}

function mostrarDatos() {
    var almacenamiento = JSON.parse(localStorage.getItem('datos')) || [];
    var tabla = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';

    almacenamiento.forEach(function(item) {
        var fila = tabla.insertRow();
        fila.insertCell().textContent = item.id;
        fila.insertCell().textContent = item.nombre;
        fila.insertCell().textContent = item.apellido;
        fila.insertCell().textContent = item.curso;
        fila.insertCell().textContent = item.codigoCurso;
        fila.insertCell().textContent = item.descripcion;
        var eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = function() {
            eliminarDato(item.id);
        };
        fila.insertCell().appendChild(eliminarBtn);
    });
}

function eliminarDato(id) {
    var almacenamiento = JSON.parse(localStorage.getItem('datos')) || [];
    var almacenamientoActualizado = almacenamiento.filter(function(item) {
        return item.id !== id;
    });
    localStorage.setItem('datos', JSON.stringify(almacenamientoActualizado));
    mostrarDatos();
}

mostrarDatos();
