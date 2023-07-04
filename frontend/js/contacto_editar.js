var args = location.search.substr(1).split('&');  
//separa string con “&” creando una lista

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}

//Elimina los caracteres especiales que recibe en la URL 
document.getElementById("id").value = decodeURIComponent(parts[0][1])
document.getElementById("nombre").value = decodeURIComponent(parts[1][1])
document.getElementById("direccion").value =decodeURIComponent( parts[2][1])
document.getElementById("telefono").value = decodeURIComponent(parts[3][1])
document.getElementById("email").value =decodeURIComponent( parts[4][1])


function modificar() {
    let id = document.getElementById("id").value
    let n = document.getElementById("nombre").value
    let p = parseInt(document.getElementById("telefono").value)
    let s = document.getElementById("direccion").value
    let i = document.getElementById("email").value
   
    let contacto = {
        nombre: n,
        telefono: p,
        direccion: s,
        mail:i
    }
    let url = "https://andresfrick.pythonanywhere.com/contactos"+id
    var options = {
        body: JSON.stringify(contacto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Contacto Editado")
            window.location.href = "./contactos.html";  
        //NUEVO,  si les da error el fetch  comentar esta linea que puede dar error  
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error")
        })      
}
