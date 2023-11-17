document.addEventListener("DOMContentLoaded", function () {

  let h1_banner = document.getElementById("ban");
  let texto_cabecera = document.getElementById("p-banner");

  // Cargar datos para los servicios
  fetch('http://localhost:3000/companys/1')  // Actualiza la URL según la ruta de tu API
    .then(response => response.json())
    .then(data => {
      // Aquí puedes acceder a los datos del JSON
      console.log(data);

      const galerys = data.galerys;
      const servicios = data.services;
      h1_banner.textContent = data.name;  // Cambia de "data.banner.titulo" a "data.name"
      texto_cabecera.textContent = data.description;  // Cambia de "data.banner.description" a "data.description"

      servicios.forEach(service => {
        document.getElementById(`desc_${service.id}`).innerText = service.description;
        document.getElementById(`img_${service.id}`).src = service.url;
      });

      galerys.forEach(galery => {
        document.getElementById(`descr_${galery.id}`).innerText = galery.description;
        document.getElementById(`imgs_${galery.id}`).src = galery.url;
      });
    })
    .catch(error => {
      console.error('Hubo un error:', error);
    });

});
