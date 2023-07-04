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
    console.log(contacto)
    let url = "https://andresfrick.pythonanywhere.com/contactos"
    var options = {
        body: JSON.stringify(contacto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Contacto Agregado")  
        })
        .catch(err => {
            //this.errored = true
            alert("Error al guardar" )
            console.error(err);
        })
}

