function validarCantidadKwh(){
      let cantidad = document.getElementById("cantidad");
            if(cantidad.value <= 0){
                  alert ("El campo cantidad tiene que ser mayor a 0");
                  return false;
            }
}

function validarDistritos(){
      let optForm = document.forms["frmCalc"]["distritos"].selectedIndex;
            if( optForm == undefined || optForm == 0 ) {
	            alert("Debe seleccionar una opción en el campo distritos");
	      return false;			
      }
}

/* function validarCheckbox(){

      if (document.querySelector('input[name="usuarios"]:checked').value == undefined){
            alert("Debe escoger un Tipo de Usuario");
            return false;
      }
} */

function calcularKwh(){
      let iva = document.querySelector('input[name="usuarios"]:checked').value;
      let zonas = document.getElementById("distritos").value;
      let zonaCentro = document.getElementById("distrito-centro").value;
      let zonaSur = document.getElementById("distrito-sur").value;
      let zonaOeste = document.getElementById("distrito-oeste").value;
      let zonaNorte = document.getElementById("distrito-norte").value;
      let cantidad = document.getElementById("cantidad").value;
      let ivaFinal;
      let zonasFinal;
      let resu = document.getElementById("result");

      if (iva == "residencial"){
            ivaFinal = 0.21;
      }
      if (iva == "industrial"){
            ivaFinal = 0.27;
      }
      
      if (zonas == zonaCentro){
            zonasFinal = 5.80;
       } 
      if (zonas == zonaSur){
            zonasFinal = 5.40;
       } 
      if (zonas == zonaOeste){  
            zonasFinal = 5.35;
       } 
      if (zonas == zonaNorte){
            zonasFinal = 5.60;
       }       

      resultado = 102 + (cantidad * zonasFinal) * (1 + ivaFinal);
      resu.innerText = `$${resultado}`;
     
}
