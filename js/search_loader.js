document.addEventListener("DOMContentLoaded", function() {
  // Crear el elemento del GIF de carga
  var loader = document.createElement("div");
  loader.setAttribute("id", "loader");
  loader.setAttribute("style", "display:none; position:fixed; top:0; left:0; right:0; bottom:0; z-index:9999; background-color:rgba(0, 0, 0, 0.6);");
  var loaderImage = document.createElement("img");
  loaderImage.setAttribute("src", "/modules/custom/search_loader/images/search-loader.gif");
  loaderImage.setAttribute("style", "position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);");
  loader.appendChild(loaderImage);
  document.body.appendChild(loader);

  // Agregar evento para mostrar el GIF de carga al enviar el formulario
  var form = document.getElementById("views-exposed-form-search-products-page-1");
  var inputSearch = document.querySelector('.icon-search');
  inputSearch.addEventListener('click', function() {
    form.submit();
    loader.style.display = "block";
  })
  form.addEventListener("submit", function() {
    loader.style.display = "block";
  });
});
