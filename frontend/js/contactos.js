const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://andresfrick.pythonanywhere.com/contactos",//host creado en pythonanywhere para el back
            contactos: [],
            error: false,
            cargando: true
        }
    },


    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.contactos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(contacto) {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: true
            })

            swalWithBootstrapButtons.fire({
                title: 'Esta seguro que quiere eliminar el contacto?',
                text: "Los datos seran borrados!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si, Eliminar',
                cancelButtonText: 'No, Cancelar!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    const url = 'https://andresfrick.pythonanywhere.com/contactos/' + contacto;

                    var options = {
                        method: 'DELETE',
                    }

                    fetch(url, options)
                        .then(function() {
                            swalWithBootstrapButtons.fire(
                                'Eliminado!',
                                'El contacto ha sido eliminado correctamente',
                                'success',

                            ).then((result) => {
                                if (result.isConfirmed) {
                                    location.reload();
                                }
                            })
                        })
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelado',
                        'El contacto no sera eliminado',
                        'error',
                    )
                }
            })
        }
    },
}).mount('#app')
