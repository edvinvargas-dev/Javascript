function mostrarResultado(resultado){
    document.getElementById("CampoResultado").value=resultado;
}
function suma(){
    let numero1 = +document.getElementById("Dato1").value;
    let numero2 = +document.getElementById("Dato2").value;
    mostrarResultado(numero1+numero2)
}
function resta(){
    let numero1 = +document.getElementById("Dato1").value;
    let numero2 = +document.getElementById("Dato2").value;
    mostrarResultado(numero1-numero2)
}
function multiplicar(){
    let numero1 = +document.getElementById("Dato1").value;
    let numero2 = +document.getElementById("Dato2").value;
    mostrarResultado(numero1*numero2)
}
function dividir(){
    let numero1 = +document.getElementById("Dato1").value;
    let numero2 = +document.getElementById("Dato2").value;
    mostrarResultado(numero1/numero2)
}
function potencia(){
    let numero1 = +document.getElementById("Dato1").value;
    let numero2 = +document.getElementById("Dato2").value;
    mostrarResultado(Math.pow(numero1,numero2))
}
function raiz(){
    let numero2 = +document.getElementById("Dato2").value;
    mostrarResultado(Math.sqrt(numero2))
}
function absoluto(){
    resultado = +document.getElementById("CampoResultado").value;
    mostrarResultado(Math.abs(resultado))
}
function random(){
    let minimo = +document.getElementById("Dato1").value;
    let maximo = +document.getElementById("Dato2").value;
    maximo = maximo+1
    mostrarResultado(Math.floor(Math.random()*(maximo-minimo)+minimo));
}
function round(){
    let resultado = +document.getElementById("CampoResultado").value;
    mostrarResultado(Math.round(resultado))
}
function floor(){
    let resultado = +document.getElementById("CampoResultado").value;
    mostrarResultado(Math.floor(resultado))
}
function ceil(){
    let resultado = +document.getElementById("CampoResultado").value;
    mostrarResultado(Math.ceil(resultado))
}
function reload(){
    location.reload()
}