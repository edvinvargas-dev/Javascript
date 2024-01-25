function darResultado(resultado){
    document.getElementById("Resultado").value = resultado
}
function ReiniciarDatos(){
    location.reload()
}
function suma(){
    let number1 = +document.getElementById("datos1").value;
    let number2 = +document.getElementById("datos2").value;
    darResultado(number1+number2)
}
function resta(){
    let number1 = +document.getElementById("datos1").value;
    let number2 = +document.getElementById("datos2").value;
    darResultado(number1-number2)
}
function multiplicacion(){
    let number1 = +document.getElementById("datos1").value;
    let number2 = +document.getElementById("datos2").value;
    darResultado(number1*number2)
}
function division(){
    let number1 = +document.getElementById("datos1").value;
    let number2 = +document.getElementById("datos2").value;
    darResultado(number1/number2)
}
function potencia(){
    let number1 = +document.getElementById("datos1").value;
    let number2 = +document.getElementById("datos2").value;
    darResultado(Math.pow(number1,number2))
}
function raiz(){
    let number2 = +document.getElementById("datos2").value;
    darResultado(Math.sqrt(number2))
}
function absoluto(){
    let resultado = +document.getElementById("Resultado").value;
    darResultado(Math.abs(resultado));
}
function random(){
    let minimo = +document.getElementById("datos1").value;
    let maximo = +document.getElementById("datos2").value;
    maximo = maximo+1;
    darResultado(Math.floor(Math.random()*(maximo-minimo)+minimo));
}
function round(){
    let resultado = +document.getElementById("Resultado").value;
    darResultado(Math.round(resultado));
}
function floor(){
    let resultado = +document.getElementById("Resultado").value;
    darResultado(Math.floor(resultado));
}
function ceil(){
    let resultado = +document.getElementById("Resultado").value;
    darResultado(Math.ceil(resultado));
}
