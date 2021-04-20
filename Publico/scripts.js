function columnasPublicas(usuario,salida,destino,a){
    this.Usuario = usuario;
    this.Salida =salida;
    this.Destino = destino;
    this.A = a;
};
function agregarFila(id){   
    
};

window.onload = function(){
    document.getElementById("busqueda").style.display = "none"
};

function mostrarBusqueda(){
    if(document.getElementById("busqueda").style.display != "none"){
        document.getElementById("busqueda").style.display = "none"
    }else{
        document.getElementById("busqueda").style.display = "flex"
    }
}
function busquedaViajes(){
    var a = new Array();
    a = JSON.parse(localStorage.getItem('Usuarios'));
    var viajes = true;
    var salida = document.getElementById("Salida").value;
    var destino = document.getElementById("Destino").value;
    ///var nuevo = document.createElement('tbody');
    if(a != null){
        for (let i = 0; i < a.length; i++) {
            viajes = true;
            if(a[i].Viajes.length > 0){
            document.getElementById("cuerpo").innerHTML = "";
                 for (let f = 0; f < a[i].Viajes.length; f++) {
                     if(a[i].Viajes[f].Salida.toLowerCase().indexOf(salida.toLowerCase(),0) != -1 && a[i].Viajes[f].Destino.toLowerCase().indexOf(destino.toLowerCase(),0) != -1  && destino != null && salida != null){
                        document.getElementById("cuerpo").insertRow(-1).innerHTML = '<tr><td>'+a[i].NamUsuario+'</td><td>'+a[i].Viajes[f].Salida+'</td><td>'+a[i].Viajes[f].Destino+'</td><td>XD</td></tr>';
                     }
                 }   
            }else{
                viajes = false;
            }
        }
        if(viajes === false){
            alert("No hay viajes registrados")
        }
    }else{
        alert("No hay usuarios registrados")
    }
}
