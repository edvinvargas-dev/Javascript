function crearCantidadTiendas(contenedorID,min,cantidadTiendas){
    let contenedor = document.getElementById(contenedorID);

    for(let conteoTiendas = 1;conteoTiendas <= cantidadTiendas;conteoTiendas++){
        let textoEtiqueta = "Tienda "+ conteoTiendas;

        let parrafoTienda = crearElementosParrafo(textoEtiqueta,min);

        contenedor.appendChild(parrafoTienda)
    }
}

function crearElementosParrafo(textoLabel,valorMin){
    //crear elementos
    let elementoParrafo = document.createElement("p");
    let elementoLabel = document.createElement("label");
    let elementoInput = document.createElement("input");
    //asignar atributos
    elementoLabel.setAttribute("for",textoLabel);
    elementoLabel.innerText = textoLabel+": ";
    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);
    //agregar hijos a parrafo
    elementoParrafo.appendChild(elementoLabel);
    elementoParrafo.appendChild(elementoInput);

    return elementoParrafo;
}

function extraerElemento(elemento){
    let textoElemento = elemento.value;
    let miElemento = Number(textoElemento);

    return miElemento;
}

function calcularVenta(){
    let Ventas = [];
    let posicionVenta = 0;
    let lventa = document.getElementById("itemTiendas");

    for(let items of lventa.children){
        let valorventa = extraerElemento(items.children[1]);
        Ventas[posicionVenta] = valorventa;
        posicionVenta = posicionVenta + 1;
    }

    let suma = sumarVenta(Ventas);
    let ventaMaximo = maximo(Ventas);
    let ventaMinimo = minimo(Ventas);
    let promedio = promedioVenta(Ventas);

    let mostrarResultado = "Venta total de: "+suma+" / Venta Mayor es de: "+ventaMaximo+" / Venta menor es de: "+ventaMinimo+ " / Venta promedio es de: "+promedio;

    let textoReemplazar = document.getElementById("mostrarResultado");

    textoReemplazar.textContent = mostrarResultado
}

function sumarVenta(array){
    let totalSuma = 0;

    for(let venta of array){
        totalSuma = totalSuma+venta;
        
    }return totalSuma;
}

function maximo(array){
    let maximo = array[0]
    for(let venta of array){
        if(venta > maximo){
            maximo = venta
        }
    }return maximo
}
function minimo(array){
    let minimo = array[0]
    for(let venta of array){
        if(venta < minimo){
            minimo = venta
        }
    }return minimo
}

function promedioVenta(array){
    let totalpromedio = 0;

    for(let venta of array){
        totalpromedio = totalpromedio+venta;
        
    }return totalpromedio/array.length
}

function reiniciarDatos(){
    location.reload()
}