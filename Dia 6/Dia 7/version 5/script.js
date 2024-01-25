function creartiendas(contenedorID, min, cantidadTiendas){
    let contenedor = document.getElementById(contenedorID);

    for(let conteoTiendas = 1; conteoTiendas <= cantidadTiendas; conteoTiendas++){

        let textoEtiqueta = "Tienda "+ conteoTiendas;

        let parrafoTienda = crearElementosParrafos(textoEtiqueta,min);

        contenedor.appendChild(parrafoTienda);
    }

}

function crearElementosParrafos(textoLabel, valorMin){

    let elementoParrafo = document.createElement("p");
    let elementoLabel = document.createElement("label");
    let elementoInput = document.createElement("input");

    elementoLabel.setAttribute("for",textoLabel);
    elementoLabel.innerText = textoLabel+": ";

    elementoInput.setAttribute("type","number");
    elementoInput.setAttribute("id",textoLabel);
    elementoInput.setAttribute("min",valorMin);
    elementoInput.setAttribute("value",0);

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
    let posicionVenta = [0];
    let xventa = document.getElementById("ItemsTienda");

    for(let items of xventa.children){
        let valorventa = extraerElemento(items.children[1]);
        Ventas [posicionVenta] = valorventa;
        posicionVenta = posicionVenta + 1;
    }


    let TotalVenta = sumarVentas(Ventas);
    let VentaMayor = ObtenerVentaMayor(Ventas);
    let VentaMenor = ObtenerVentaMenor(Ventas);

    let parrafoSalida = document.getElementById("TotalSuma");
    let resultado = "Total de Venta: "+TotalVenta+" / Venta Mayor: "+VentaMayor+" / Venta Menor: "+VentaMenor;
    parrafoSalida.textContent = resultado
}

function sumarVentas(array){
    let TotalSumaVenta = array[0];

    for(let venta of array){
        TotalSumaVenta = TotalSumaVenta+venta;
    }return TotalSumaVenta
}

function ObtenerVentaMayor(array){
    let Maximo = array[0];

    for(let venta of array){
        if(venta > Maximo){
            Maximo = venta;
        }
    }return Maximo
}
function ObtenerVentaMenor(array){
    let Minimo = array[0];

    for(let venta of array){
        if(venta < Minimo){
            Minimo = venta;
        }
    }return Minimo
}