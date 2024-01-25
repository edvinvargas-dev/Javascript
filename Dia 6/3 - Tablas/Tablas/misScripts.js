function multiplicar(){
    //Obtener el numero
    let elementoTextoTabla = document.getElementById("textoTabla").value;
    let numeroTabla = Number(elementoTextoTabla);

    //Obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listaTabla");

    //Producir y mostrar resultados
    for(x=1;x<=10;x++){
        //calcular el resultado
        let numeroResultado = numeroTabla*x;

        //Armar string con resultado
        let textoResultado = numeroTabla+ " Por "+x+" es igual a "+numeroResultado;

        //Crear elemento de la lista
        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista)
    }
}
function Reiniciar(){
    location.reload()
}