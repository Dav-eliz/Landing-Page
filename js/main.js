document.addEventListener("DOMContentLoaded", function () {

  let h1_banner = document.getElementById("ban");
  let texto_cabecera = document.getElementById("p-banner");


  let titulo = document.getElementById("contacto");
  let cel = document.getElementById("telef");
  let email = document.getElementById("correo");
  let ig = document.getElementById("instagram");
  let h4_direct = document.getElementById("direccion");
  let ex = document.getElementById("exacta");

  let footer = document.getElementById("foot");

  // Cargar datos para los servicios
  fetch('./js/mocks/company.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos del JSON
    console.log(data);
    
    const productos = data.products;
    const servicios = data.services;
    h1_banner.textContent = data.banner.titulo;
    texto_cabecera.textContent = data.banner.description;

    titulo.textContent = data.contactos.titulo;
    cel.textContent = data.contactos.celu;
    email.textContent = data.contactos.email;
    ig.textContent = data.contactos.insta;
    h4_direct.textContent = data.contactos.address;
    ex.textContent = data.contactos.ex;

    footer.textContent = data.footer.foooter;

    
    servicios.forEach(service => {
      document.getElementById(`desc_${service.id}`).innerText = service.description;
      document.getElementById(`img_${service.id}`).src = service.icon;
    });

  
    productos.forEach(product => {
      document.getElementById(`descr_${product.id}`).innerText = product.description;
      document.getElementById(`imgs_${product.id}`).src = product.icon;
    });



  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });


    
});
