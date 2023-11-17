document.addEventListener("DOMContentLoaded", function () {

  let h1_banner = document.getElementById("ban");
  let texto_cabecera = document.getElementById("p-banner");

  // Cargar datos para los servicios
  fetch('http://localhost:3000/companys/1')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos del JSON
    console.log(data);
    
    const galerys = data.galerys;
    const servicios = data.services;
    h1_banner.textContent = data.banner.titulo;
    texto_cabecera.textContent = data.banner.description;

    servicios.forEach(service => {
      document.getElementById(`desc_${service.id}`).innerText = service.description;
      document.getElementById(`img_${service.id}`).src = service.icon;
    });

    galerys.forEach(galery => {
      document.getElementById(`descr_${galery.id}`).innerText = galery.description;
      document.getElementById(`imgs_${galery.id}`).src = galery.icon;
    });
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });

});
