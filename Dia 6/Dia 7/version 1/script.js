function extraerElemento(elemento){
    let textoElemento = document.getElementById(elemento).value;
    let miElemento = Number(textoElemento);

    return miElemento;    
}

function calcularVenta(){
    let Ventas1, Ventas2, Ventas3, Ventas4, Ventas5, Ventas6;

    Ventas1 = extraerElemento("Tienda1");
    Ventas2 = extraerElemento("Tienda2");
    Ventas3 = extraerElemento("Tienda3");
    Ventas4 = extraerElemento("Tienda4");
    Ventas5 = extraerElemento("Tienda5");
    Ventas6 = extraerElemento("Tienda6");

    let resultado = Ventas1+Ventas2+Ventas3+Ventas4+Ventas5+Ventas6;
    let parrafoTexto = document.getElementById("TotalSuma");
    let respuesta = "Venta total de: "+resultado
    parrafoTexto.textContent = respuesta
}

function Reiniciar(){
    location.reload()
}