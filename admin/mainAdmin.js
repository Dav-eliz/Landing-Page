// mainA.js

// Función para manejar operaciones de actualizar y eliminar para la entidad Company
function manejarOperacionCompany(operacion) {
    const id = document.getElementById('companyId').value;
    if (!id) {
        alert('Por favor, ingrese un ID válido para la empresa.');
        return;
    }

    const descripcion = document.getElementById('companyDescription').value;
    const urlImagen = document.getElementById('companyImageUrl').value;

    if (operacion === 'actualizar') {
        actualizarRegistroCompany(id, descripcion, urlImagen);
    } else if (operacion === 'eliminar') {
        eliminarRegistroCompany(id);
    }
}

// Función para manejar operaciones de actualizar y eliminar para la entidad Service
function manejarOperacionService(operacion) {
    const id = document.getElementById('serviceId').value;
    if (!id) {
        alert('Por favor, ingrese un ID válido para el servicio.');
        return;
    }

    const descripcion = document.getElementById('serviceDescription').value;
    const url = document.getElementById('serviceUrl').value;

    if (operacion === 'actualizar') {
        actualizarRegistroService(id, descripcion, url);
    } else if (operacion === 'eliminar') {
        eliminarRegistroService(id);
    }
}

// Función para manejar operaciones de actualizar y eliminar para la entidad Galery
function manejarOperacionGalery(operacion) {
    const id = document.getElementById('galeryId').value;
    if (!id) {
        alert('Por favor, ingrese un ID válido para la galería.');
        return;
    }

    const descripcion = document.getElementById('galeryDescription').value;
    const url = document.getElementById('galeryUrl').value;

    if (operacion === 'actualizar') {
        actualizarRegistroGalery(id, descripcion, url);
    } else if (operacion === 'eliminar') {
        eliminarRegistroGalery(id);
    }
}

// Funciones para la entidad Company
function actualizarRegistroCompany(id, descripcion, urlImagen) {
    fetch(`http://localhost:3000/companys/${id}`, {
        method: 'PATCH', // o 'PUT' dependiendo de tu API
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description: descripcion,
            imageUrl: urlImagen,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo actualizar la entidad Company.');
            }
            alert('Entidad Company actualizada con éxito.');
        })
        .catch(error => alert(error));
}

function eliminarRegistroCompany(id) {
    fetch(`http://localhost:3000/companys/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo eliminar la entidad Company.');
            }
            alert('Entidad Company eliminada con éxito.');
        })
        .catch(error => alert(error));
}

// Funciones para la entidad Service
function actualizarRegistroService(id, descripcion, url) {
    fetch(`http://localhost:3000/services/${id}`, {
        method: 'PATCH', // o 'PUT' dependiendo de tu API
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description: descripcion,
            url: url,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo actualizar la entidad Service.');
            }
            alert('Entidad Service actualizada con éxito.');
        })
        .catch(error => alert(error));
}

function eliminarRegistroService(id) {
    fetch(`http://localhost:3000/services/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo eliminar la entidad Service.');
            }
            alert('Entidad Service eliminada con éxito.');
        })
        .catch(error => alert(error));
}

// Funciones para la entidad Galery
function actualizarRegistroGalery(id, descripcion, url) {
    fetch(`http://localhost:3000/galerys/${id}`, {
        method: 'PATCH', // o 'PUT' dependiendo de tu API
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            description: descripcion,
            url: url,
        }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo actualizar la entidad Galery.');
            }
            alert('Entidad Galery actualizada con éxito.');
        })
        .catch(error => alert(error));
}

function eliminarRegistroGalery(id) {
    fetch(`http://localhost:3000/galerys/${id}`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo eliminar la entidad Galery.');
            }
            alert('Entidad Galery eliminada con éxito.');
        })
        .catch(error => alert(error));
}