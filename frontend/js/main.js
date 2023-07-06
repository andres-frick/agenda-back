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

document.getElementById("footer").innerHTML=`
<div class="copy">
    <small>&copy; 2023 - <b>Codo a Codo - Comision 23033</b> - Todos los Derechos Reservados.</small>
</div>`

function volver(){
    window.location.href = "./contactos.html";
}
