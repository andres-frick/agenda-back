function guardar() {
    let n = document.getElementById("nombre").value
    let t = parseInt(document.getElementById("telefono").value)
    let d = document.getElementById("direccion").value
    let m = document.getElementById("email").value


    let contacto = {
        nombre: n,
        telefono: t,
        direccion: d,
        email: m
    }

    let url = "https://andresfrick.pythonanywhere.com/contactos"
    var options = {
        body: JSON.stringify(contacto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }

    fetch(url, options)
        .then(function () {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Contacto creado correctamente',
                showConfirmButton: false,
                timer: 1500
            }).then(function () {
                window.location.href = "./contactos.html";
            })

        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
            })
            console.error(err);
        })
}
