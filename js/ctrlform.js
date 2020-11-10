"use strict";

var forma = document.getElementById("forma"),
campos = ["clave", "nombre","telefono","fecha"],
salidas = ["salidaClave", "salidaNombre","salidaTelefono","salidaFecha"];

forma.addEventListener("submit", procesa, false);

function procesa(){
    //var dia = new Date(campos[3]).value;
    //var dd = dia.getDate();
    //var mm = dia.getMonth();
    //var yyyy = dia.getFullYear();
    for(var i = 0, longitud = campos.length; i < longitud; i++){
		var campo = forma[campos[i]];
		var salida = document.getElementById(salidas[i]);
		salida.value = campo.value;

    }

    //salidas[3].value = dd+"/"+mm+"/"+yyyy;

}
