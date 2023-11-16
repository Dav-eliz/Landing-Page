// admin.js

const apiUrl = "http://tu-api.com"; // Cambia esto a la URL real de tu API

async function manejarOperacion(tipoOperacion, entidad) {
    const entityId = document.getElementById(`${entidad}Id`).value;
    const url = `${apiUrl}/api/${entidad}/${entityId}`;
    const method = tipoOperacion === 'eliminar' ? 'DELETE' : 'PATCH';

    let data = {};

    if (tipoOperacion === 'actualizar') {
        if (entidad === 'company') {
            data = {
                description: document.getElementById(`${entidad}Description`).value,
                imageUrl: document.getElementById(`${entidad}ImageUrl`).value,
                // Agregar más campos según sea necesario para la actualización
            };
        } else if (entidad === 'service') {
            data = {
                description: document.getElementById(`${entidad}Description`).value,
                url: document.getElementById(`${entidad}Url`).value,
                // Agregar más campos según sea necesario para la actualización
            };
        } else if (entidad === 'galery') {
            data = {
                description: document.getElementById(`${entidad}Description`).value,
                url: document.getElementById(`${entidad}Url`).value,
                // Agregar más campos según sea necesario para la actualización
            };
        }
    }

    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    // Manejar la respuesta según sea necesario
    if (response.ok) {
        console.log(`${tipoOperacion} ${entidad} exitoso.`);
    } else {
        console.error(`Error al ${tipoOperacion} ${entidad}.`);
    }
}
