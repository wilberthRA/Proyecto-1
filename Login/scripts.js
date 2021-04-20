function RegUsuario(namusuario,Contraseña,tel,nombre,apellidos){
    this.NamUsuario = namusuario;
    this.Contraseña = Contraseña;
    this.Telefono = tel;
    this.Nombre = nombre;
    this.Apellidos = apellidos;
};
function validarlog(id){
    let usuarios = new Array();
    usuarios = JSON.parse(localStorage.getItem( "Usuarios" ));
    let e = ""
        for(let i = 0;i < usuarios.length;i++){
            if(document.getElementById("username").value == usuarios[i].NamUsuario && document.getElementById("password").value == usuarios[i].Contraseña){
                alert("bienvenido")
                setAction(id);
                sessionStorage.setItem("usuarioactivo",document.getElementById("username").value)
                return true
            }else{
                e = "si"     
            }
        }
        if(e === "si"){
            alert("usuario invalido")
            return false;
        }
        
}
function setAction(form) {
        form.action = "C:/Users/wilcr/OneDrive/Escritorio/UTN Software/Diseño de aplicaciones web/Programas/Proyecto 1/Dashboar/dashboar.html";
    return false;
}