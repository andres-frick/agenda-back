function guardar() {
    let n = document.getElementById("nombre").value
    let t = parseInt(document.getElementById("telefono").value)
    let d = document.getElementById("direccion").value
    let m = document.getElementById("mail").value


    let Contacto = {
        nombre: n,
        telefono: t,
        direccion: d,
        mail: m
    }
    let url = "https://andresfrick.pythonanywhere.com/contactos"
    var options = {
        body: JSON.stringify(Contacto),
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

