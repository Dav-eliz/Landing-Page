document.addEventListener("DOMContentLoaded"),
    function () {
        const apiBaseUrl = 'http://localhost:3000';

        //  Funciones para operaciones de actualizacion y eliminacion

        function manejarOperacion(tipoOperacion, entidad) {
            const entityId = document.getElementById('${entidad}Id').value;

            //Actulizar y eliminar empresa
            if (entidad === 'company') {
                const companyDescription = document.getElementById('${entidad}Description').value;
                const companyImageUrl = document.getElementById('${entidad}ImageUrl').value;

                if (tipoOperacion === 'actualizar') {
                    updateCompany(entityId, companyImageUrl);
                } else if (tipoOperacion === 'eliminar') {
                    deleteEntity(entityId, 'company');
                }
            }

            //Actualizar y eliminar servicio
            else if (entidad === 'service') {
                const serviceDescription = document.getElementById('${entidad}Description').value;

                const serviceUrl = document.getElementById('${entidad}Url').value;

                if (tipoOperacion === 'actualizar') {
                    updateService(entityId, serviceDescription, serviceUrl);
                } else if (tipoOperacion === 'eliminar') {
                    deleteEntity(entityId, 'service');
                }
            }


            //Actualizar y eliminar galeria
            else if (entidad === 'galery') {
                const galeryDescription = document.getElementById('${entidad}Description').value;

                const galeryUrl = document.getElementById('${entidad}Url').value;

                if (tipoOperacion === 'actualizar') {
                    updateGalery(entityId, galeryDescription, galeryUrl);
                } else if (tipoOperacion === 'eliminar') {
                    deleteEntity(entityId, 'galery');
                }
            }
        }

        // Función para actualizar entidad (Company, Galery, Service)
        function updateEntity(entityId, description, url) {
            // Implementa la lógica para actualizar una entidad
            console.log(`Actualizar entidad con ID: ${entityId}, Descripción: ${description}, URL: ${url}`);
        }

        // Función para eliminar una entidad (Company, Galery, Service)
        function deleteEntity(entityId, entityType) {
            // Llamada a la API para eliminar la entidad
            fetch(`${apiBaseUrl}/api/${entityType}s/${entityId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    console.log(`Respuesta del servidor (Eliminar ${entityType}):`, data);
                    // Puedes realizar acciones adicionales según la respuesta del servidor
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
        // Función para actualizar una empresa
        function updateCompany(companyId, description, imageUrl) {
            // Llamada a la API para actualizar la empresa
            fetch(`${apiBaseUrl}/api/companies/${companyId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: description,
                    imageUrl: imageUrl,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Respuesta del servidor (Actualizar empresa):', data);
                    // Puedes realizar acciones adicionales según la respuesta del servidor
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        // Función para actualizar un servicio
        function updateService(serviceId, description, url) {
            // Llamada a la API para actualizar el servicio
            fetch(`${apiBaseUrl}/api/services/${serviceId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: description,
                    url: url,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Respuesta del servidor (Actualizar servicio):', data);
                    // Puedes realizar acciones adicionales según la respuesta del servidor
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        // Función para actualizar una galería
        function updateGalery(galeryId, description, url) {
            // Llamada a la API para actualizar la galería
            fetch(`${apiBaseUrl}/api/galerys/${galeryId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    description: description,
                    url: url,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Respuesta del servidor (Actualizar galería):', data);
                    // Puedes realizar acciones adicionales según la respuesta del servidor
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };





