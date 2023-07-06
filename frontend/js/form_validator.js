
function validar() {
    var form = document.form;

    if (form.nombre.value == 0) {
        alert("El campo Nombre esta vacio");
        form.nombre.value = "";
        form.nombre.focus();
        return false;
    } else if (form.direccion.value == 0) {
        alert("El campo Direccion esta vacio");
        form.direccion.value = "";
        form.direccion.focus();
        return false;
    } else if (form.telefono.value == 0) {
        alert("El campo Telefono esta vacio");
        form.telefono.value = "";
        form.telefono.focus();
        return false;
    } else if (form.email.value == 0) {
        alert("El campo Email esta vacio");
        form.email.value = "";
        form.email.focus();
        return false;
    } else if (!validarCorreo(form.email.value)){
        alert("El Email no es valido");
        form.email.focus();
        return false;
    }else {
        if (form.id.value!=undefined){
            modificar();
        }else{
            guardar();
        }        
    }

}


function validarCorreo(correo) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);
    if (esValido) {
        return true
    } else {
        return false
    }
}