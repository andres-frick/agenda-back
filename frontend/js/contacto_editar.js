var args = location.search.substring(1).split('&');
//separa string con “&” creando una lista

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}

//Elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nombre").value = decodeURIComponent(parts[1][1])
document.getElementById("direccion").value = decodeURIComponent(parts[2][1])
document.getElementById("telefono").value = decodeURIComponent(parts[3][1])
document.getElementById("email").value = decodeURIComponent(parts[4][1])


function modificar() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
        title: 'Esta seguro que quiere modificar el contacto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Modificar',
        cancelButtonText: 'No, Cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            
            let id = document.getElementById("id").value
            let n = document.getElementById("nombre").value
            let p = document.getElementById("telefono").value
            let s = document.getElementById("direccion").value
            let i = document.getElementById("email").value

            let contacto = {
                nombre: n,
                telefono: p,
                direccion: s,
                email: i
            }
            let url = "https://andresfrick.pythonanywhere.com/contactos/" + id
            var options = {
                body: JSON.stringify(contacto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }

            fetch(url, options)
                .then(function () {
                    swalWithBootstrapButtons.fire(
                        'Modificado!',
                        'El contacto ha sido modificado correctamente',
                        'success',

                    ).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "./contactos.html";
                        }
                    })
                        .catch(err => {
                            console.error(err);
                            alert("Error")
                        })
                })
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'El contacto no fue modificado',
                'error',
            )

        }

    })
}

