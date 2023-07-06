document.getElementById("header").innerHTML=`<nav class="navbar navbar-expand-sm">
<div class="container">
  <a class="navbar-brand" href="/frontend/">Agenda</a>
  <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>
    <form class="d-flex my-2 my-lg-0">
        <a class="nav-link" href="contactos.html">Contactos</a>
    </form>
</div>
</nav>`
var navbarBrand = document.querySelector(".navbar-brand");
navbarBrand.style.color = "rgb(240,248,255)"; 
var navLink = document.querySelector(".nav-link");
navLink.style.color = "rgb(240,248,255)"; 

document.body.style.backgroundColor = "#DDE5B6";




document.getElementById("footer").innerHTML=`
<div class="copy">
    <small>&copy; 2023 - <b>Codo a Codo - Comision 23033</b> - Todos los Derechos Reservados.</small>
</div>`

var footer = document.getElementById("footer");
footer.style.position = "fixed";
footer.style.bottom = "0";
footer.style.width = "100%";
footer.style.backgroundColor = "#A98467";
footer.style.padding = "10px 0";
footer.style.textAlign = "center";

function volver(){
    window.location.href = "./contactos.html";
}

