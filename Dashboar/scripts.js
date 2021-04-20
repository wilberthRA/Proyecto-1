function mostrartab(id){
    var someTabTriggerEl = document.getElementById(id)
    var tab = new bootstrap.Tab(someTabTriggerEl)
    tab.show()
}
function agregarFila(){
    document.getElementById("tabla1").insertRow(-1).innerHTML = '<tr><td>'+document.getElementById("Nomride").value+'</td><td>'+document.getElementById("Salida").value+'</td><td>'+document.getElementById("Destino").value+'</td><td><button class="btn btn-primary" type="button" role="tab" onclick="cargarRide(this),Fila(this),mostrartab(\''+'Rides-tab'+'\'),EditarAgregar(\''+'Editar'+'\')">Editar</button> <button class="btn btn-primary" onclick="pregunta(this)">Borrar</button> <button class="btn btn-primary" type="button" id="RidesReadonly-tab" onclick="cargarRide(this),readonly(),mostrartab(\''+'Rides-tab'+'\'),EditarAgregar(\''+'Ver'+'\')" >ver</button></td></tr>';
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var posicion = posicionUsuario();
    let nombre = document.getElementById("Nomride").value;
        let salida = document.getElementById("Salida").value;
        let destino = document.getElementById("Destino").value;
        let descripcion= document.getElementById("descripcion").value;
        let hsalida = document.getElementById("Hsalida").value;
        let hllegada = document.getElementById("Hllegada").value;
        let dias = diasSeleccionados();
        let h = new datostabla(nombre,salida,destino,descripcion,hsalida,hllegada,dias);
        a[posicion].Viajes.push(h);
        localStorage.setItem("Usuarios",JSON.stringify(a));
}
function pintar(){
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var g = sessionStorage.getItem('usuarioactivo');
    for (let i = 0; i < a.length; i++) {
        if(g === a[i].NamUsuario){
            for (let f = 0; f < a[i].Viajes.length; f++) {
                document.getElementById("tabla1").insertRow(-1).innerHTML = '<tr><td>'+a[i].Viajes[f].Nombre+'</td><td>'+a[i].Viajes[f].Salida+'</td><td>'+a[i].Viajes[f].Destino+'</td><td><button class="btn btn-primary" type="button" role="tab" onclick="cargarRide(this),Fila(this),mostrartab(\''+'Rides-tab'+'\'),EditarAgregar(\''+'Editar'+'\')">Editar</button> <button class="btn btn-primary" onclick="pregunta(this)">Borrar</button> <button class="btn btn-primary" type="button" id="RidesReadonly-tab" onclick="cargarRide(this),readonly(),mostrartab(\''+'Rides-tab'+'\'),EditarAgregar(\''+'Ver'+'\')" >ver</button></td></tr>';
            }    
        }
    }
}
function posicionUsuario(){
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var g = sessionStorage.getItem('usuarioactivo');
        var posicion = 0;
        for (let j = 0; j < a.length; j++) {
            if(g === a[j].NamUsuario){
               posicion = j;
            }
        }
        return posicion
}
function editarViaje(){
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var fila = sessionStorage.getItem("fila");
    var posicion = posicionUsuario();
    a[posicion].Viajes[fila-1].Nombre = document.getElementById("Nomride").value;
    a[posicion].Viajes[fila-1].Salida = document.getElementById("Salida").value;
    a[posicion].Viajes[fila-1].Destino = document.getElementById("Destino").value;
    a[posicion].Viajes[fila-1].Descripcion = document.getElementById("descripcion").value;
    a[posicion].Viajes[fila-1].HSalida = document.getElementById("Hsalida").value;
    a[posicion].Viajes[fila-1].HLlegada = document.getElementById("Hllegada").value;
    a[posicion].Viajes[fila-1].Dias = diasSeleccionados();
    localStorage.setItem("Usuarios",JSON.stringify(a))
}

function Fila(row){
    var d = row.parentNode.parentNode.rowIndex;
    sessionStorage.setItem("fila",d)
}
function eliminar(row){
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var posicion = posicionUsuario();
    var d = row.parentNode.parentNode.rowIndex;
    a[posicion].Viajes.splice(d-1,1)
    document.getElementById('tabla1').deleteRow(d);
    localStorage.setItem("Usuarios",JSON.stringify(a))
}
function cargarRide(row){
    var d = row.parentNode.parentNode.rowIndex;
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var posicion = posicionUsuario();
    document.getElementById("Nomride").value = a[posicion].Viajes[d-1].Nombre;
    document.getElementById("Salida").value = a[posicion].Viajes[d-1].Salida;
    document.getElementById("Destino").value = a[posicion].Viajes[d-1].Destino;
    document.getElementById("descripcion").value = a[posicion].Viajes[d-1].Descripcion;
    document.getElementById("Hsalida").value = a[posicion].Viajes[d-1].HSalida;
    document.getElementById("Hllegada").value = a[posicion].Viajes[d-1].HLlegada;
    var formulario = document.getElementById("section3").childNodes;
    for (let i = 0; i < formulario.length; i++) {
        for (let f = 0; f < a[posicion].Viajes[d-1].Dias.length; f++) {
            if (formulario[i].type == "checkbox" && formulario[i].value == a[posicion].Viajes[d-1].Dias[f] ) {
                formulario[i].checked = true;
            }
        } 
    }
}
function cargarInfoPersonal(){
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var posicion = posicionUsuario();
    document.getElementById("username").value = a[posicion].NamUsuario;
    document.getElementById("name").value = a[posicion].Nombre;
    document.getElementById("last name").value = a[posicion].Apellidos;
    document.getElementById("cellphone").value = a[posicion].Telefono;    
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
function validarInfoPersonal(){
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var posicion = posicionUsuario();
    var info;
    if(validarNomUsuario() == true){
        sessionStorage.setItem("usuarioactivo",document.getElementById("username").value)
        if(document.getElementById("password").value != "" && document.getElementById("ReContraseña").value != ""){
            if(document.getElementById("password").value === document.getElementById("ReContraseña").value){
                info = new RegUsuario(document.getElementById("username").value,document.getElementById("password").value,document.getElementById("cellphone").value,document.getElementById("name").value,document.getElementById("last name").value,a[posicion].Viajes);
                if(a[posicion] != info){
                    a[posicion] = info;
                    localStorage.setItem("Usuarios",JSON.stringify(a))
                    document.getElementById("password").value = "";
                    document.getElementById("ReContraseña").value = "";
                }
            }else{ 
                cargarInfoPersonal()
                document.getElementById("password").value = "";
                document.getElementById("ReContraseña").value = "";
                alert("la contraseña no coincide")
            }
        }else{
            info = new RegUsuario(document.getElementById("username").value,a[posicion].Contraseña,document.getElementById("cellphone").value,document.getElementById("name").value,document.getElementById("last name").value,a[posicion].Viajes);
            if(a[posicion] != info){
            a[posicion] = info;
            localStorage.setItem("Usuarios",JSON.stringify(a))
            }
        }
    }else{
        cargarInfoPersonal()
        document.getElementById("password").value = "";
        document.getElementById("ReContraseña").value = "";
        alert("ese nombre de usuario ya esta en uso")
    }
    
}
function pregunta(id){
    if (confirm('¿Estas seguro que quiere borrar el viaje?')){
     eliminar(id)
    }
}
function pregunta2(){
    if (confirm('¿Estas seguro que quiere cerrar sesion?')){
        document.getElementById("enlaceCerrar").href="C:/Users/wilcr/OneDrive/Escritorio/UTN Software/Diseño de aplicaciones web/Programas/Proyecto 1/Publico/publico.html"
    }
}
function readonly(){
    var hijos = document.getElementById('section1').childNodes;
    var hijos2 = document.getElementById('centro').childNodes;
    var hijos3 = document.getElementById('section3').childNodes;
    var hijos4 = document.getElementById('section2').childNodes;
    for (let index = 0; index < hijos.length; index++) {
        hijos[index].disabled = true;

        var Rehijos = hijos[index].childNodes;
        for (let i = 0; i < Rehijos.length; i++) {
            Rehijos[i].readOnly = true;
            
        }
    }
    for (let a = 0; a < hijos2.length; a++) {
        hijos2[a].readOnly = true;
    }
    for (let a = 0; a < hijos3.length; a++) {
        hijos3[a].disabled = true;
    }
    for (let a = 0; a < hijos4.length; a++) {
        hijos4[a].disabled = true;
    }
}
function datostabla(nombre,salida,destino,descripcion,hsalida,hllegada,dias){
    this.Nombre = nombre;
    this.Salida = salida; 
    this.Destino = destino;
    this.Descripcion = descripcion;
    this.HSalida = hsalida;
    this.HLlegada = hllegada;
    this.Dias = dias;
}
function diasSeleccionados(){
    var diasSeleccionados = new Array();
    var formulario = document.getElementById("section3").childNodes;
    for (let i = 0; i < formulario.length; i++) {
        if (formulario[i].type == "checkbox" && formulario[i].checked==true) {
            diasSeleccionados.push(formulario[i].value)
        }
    }
    return diasSeleccionados
}
function RegUsuario(namusuario,Contraseña,tel,nombre,apellidos,viajes){
    this.NamUsuario = namusuario;
    this.Contraseña = Contraseña;
    this.Telefono = tel;
    this.Nombre = nombre;
    this.Apellidos = apellidos;
    this.Viajes = viajes
};
function EditarAgregar(cambio){
    sessionStorage.setItem("Tipo",cambio)
}
function accion(){
    var tipo = sessionStorage.getItem("Tipo");
    if(tipo == "Editar"){
        editarViaje()
    }else if(tipo == "Agregar"){
        diasSeleccionados()
        agregarFila()
    }
}
window.onload = function(){
    pintar();
}