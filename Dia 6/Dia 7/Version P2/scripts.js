function crearcantTiendas(contenedorID, min, cantidadxTiendas){
    let contenedorx = document.getElementById(contenedorID);

    for(let conteoTiendas = 1; conteoTiendas <= cantidadxTiendas; conteoTiendas++){
        let etiquetasTiendas = "Tienda "+conteoTiendas;

        let parrafoTiendax = elementosParrafos(etiquetasTiendas,min);

        contenedorx.appendChild(parrafoTiendax);
    }
}

function elementosParrafos(textoLabel,valorMin){
    let elementoParrafo = document.createElement("p");
    let elementoLabel = document.createElement("label");
    let elementoInput = document.createElement("input");

    elementoLabel.setAttribute("for",textoLabel);
    elementoLabel.innerText = textoLabel+":";

    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);

    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo

}   

function extraerElement(elemento){
    let textoElemento = elemento.value;
    let numeroElemento = Number(textoElemento);
    let miElemento = numeroElemento;

    return miElemento
}

function calcularVenta(){
    let Ventas = []
    let posicionVenta = 0
    let itemtiendasID = document.getElementById("itemTiendas");

    for(let items of itemtiendasID.children){
        let valorventa = extraerElement(items.children[1]);
        Ventas[posicionVenta] = valorventa;
        posicionVenta = posicionVenta + 1;
    }

    let suma = sumarVentas(Ventas)
    let Mayor = ventaMayor(Ventas)
    let Menor = ventaMenor(Ventas)
    let promedio = promedioVentas(Ventas).toFixed(2)

    let parrafoSalida = document.getElementById("mostrarResultado");
    let textoSalida = "Venta total de: "+suma+" / Venta mayor es de: "+Mayor+" /Venta menor es de: "+Menor+"/ Venta promedio de: "+promedio;

    parrafoSalida.textContent = textoSalida

}

function sumarVentas(array){
    let totalSuma = 0;

    for(let venta of array){
        totalSuma = totalSuma+venta;
    }return totalSuma
}

function ventaMayor(array){
    let maximo = array[0];
    for(let venta of array){
        if(venta > maximo)
        maximo = venta
    }return maximo
}
function ventaMenor(array){
    let minimo = array[0];
    for(let venta of array){
        if(venta < minimo)
        minimo = venta
    }return minimo
}
function promedioVentas(array){
    let totalSuma = 0;

    for(let venta of array){
        totalSuma = totalSuma+venta;
        
    }
    return totalSuma/array.length
}



function reiniciarDatos(){
    location.reload()
}