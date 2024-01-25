function recomendar(genero) {
    let edad = document.getElementById("numberedad").value;
    let TextoaCambiar = document.getElementById("cambiarTexto");
    let cambiar = document.getElementById("textorecomendacion");
    cambiar.textContent = "Nuestra recomendacion para ti es:";
  
    switch(genero) {
        case "comedia":
            if(edad<13){
                TextoaCambiar.textContent = "Comedia para menores de 13";
            } else if(edad < 16){
                TextoaCambiar.textContent = "Comedia para menores a 16";
            } else { TextoaCambiar.textContent = "Comedia para mayores"
                    }break;
    }
    switch(genero) {
        case "drama":
            if(edad<13){
                TextoaCambiar.textContent = "Drama para menores de 13";
            } else if(edad < 16){
                TextoaCambiar.textContent = "Drama para menores a 16";
            } else { TextoaCambiar.textContent = "Drama para mayores"
                    }break;
    }   
    switch(genero) {
        case "musical":
            if(edad<13){
                TextoaCambiar.textContent = "Musical para menores de 13";
            } else if(edad < 16){
                TextoaCambiar.textContent = "Musical para menores a 16";
            } else { TextoaCambiar.textContent = "Musical para mayores"
                    }break;
    }   
    switch(genero) {
        case "crimen":
            if(edad<13){
                TextoaCambiar.textContent = "Crimen para menores de 13";
            } else if(edad < 16){
                TextoaCambiar.textContent = "Crimen para menores a 16";
            } else { TextoaCambiar.textContent = "Crimen para mayores"
                    }break;
    }      
  }
function BorrarDatos(){
    location.reload()
}
  