function validarCantidadKwh(){
      var cantidad = document.getElementById("cantidad");
            if(isNaN(cantidad.value == "")){
                  alert ("El campo cantidad tiene que se numero");
                  return false;
            }
}

function validarDistritos(){
      var optForm = document.forms["frmCalc"]["distritos"].selectedIndex;
            if( optForm == null || optForm == 0 ) {
	            alert("Debe seleccionar una opción en el campo distritos");
	      return false;					
      }
}

function calcular(){
      var iva = document.getElementById('usuarios').value;
      var zonas = document.getElementById("distritos").value;
      var cantidad = document.getElementById("cantidad").value;
      
      if (iva == residencial ){
            iva = 0.21
      }else if (iva == industrial){
            iva = 0.27
      }
      
      if (zonas == "distrito-centro" ){
            zonas = 5.80;
       }
      if (zonas =="distrito-sur" ){
            zonas = 5.40;
       }    
      if (zonas =="distrito-oeste" ){   
            zonas = 5.35;
       }
       if (zonas =="distrito-norte"){
            zonas = 5.60;
       }       
         
      total = 102 + (cantidad * zonas) * (1 + iva)
    
}
