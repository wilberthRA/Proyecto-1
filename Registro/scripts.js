function RegUsuario(namusuario,Contraseña,tel,nombre,apellidos){
    this.NamUsuario = namusuario;
    this.Contraseña = Contraseña;
    this.Telefono = tel;
    this.Nombre = nombre;
    this.Apellidos = apellidos;
    this.Viajes = new Array();
};
function guardar_localstorage(){
    if(localStorage.getItem("Usuarios") != null){
        var usuarios = new Array();
        usuarios = JSON.parse(localStorage.getItem( "Usuarios" ));
        let nombre = document.getElementById("name").value;
        let apellidos = document.getElementById("last name").value;
        let telefono = document.getElementById("cellphone").value;
        let NamUsuario = document.getElementById("username").value;
        let Contraseña = document.getElementById("password").value;
        var usuario = new RegUsuario(NamUsuario,Contraseña,telefono,nombre,apellidos);
        usuarios.push(usuario);
        localStorage.setItem("Usuarios",JSON.stringify(usuarios));
    }else{
        let nombre = document.getElementById("name").value;
        let apellidos = document.getElementById("last name").value;
        let telefono = document.getElementById("cellphone").value;
        let NamUsuario = document.getElementById("username").value;
        let Contraseña = document.getElementById("password").value;
        var usuario = new RegUsuario(NamUsuario,Contraseña,telefono,nombre,apellidos);
        var usuarios = new Array();
        usuarios[usuarios.length] = usuario;
        localStorage.setItem("Usuarios",JSON.stringify(usuarios));
        
    }
}

function validar(id){
    if(validarNomUsuario() == true){
        if(document.getElementById("password").value === document.getElementById("ReContraseña").value && document.getElementById("ReContraseña").value !== "" && document.getElementById("password").value !== ""){
                guardar_localstorage()
                setAction(id)
                return true;
        }else{ 
            return false;
            alert("la contraseña no coincide")
        }
    }else{
        alert("ese nombre de usuario ya esta en uso")
        return false;
    }//*/
}
function validarNomUsuario(){
    var usuarios = new Array();
        usuarios = JSON.parse(localStorage.getItem( "Usuarios" ));
    if(localStorage.getItem("Usuarios") != null){
        for(let i = 0;i < usuarios.length;i++){
            if( document.getElementById("username").value == usuarios[i].NamUsuario){
                return false;
            }else{
                return true;
            }
        }
    }else{
        return true;
    }
}
function setAction(form) {
        form.action = "C:/Users/wilcr/OneDrive/Escritorio/UTN Software/Diseño de aplicaciones web/Programas/Proyecto 1/Login/login.html";
    return false;
}