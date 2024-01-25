function iniciarTiempo(){
    let vIntnumerosDigitados = document.getElementById("tiempoElegido");
    setTimeout(tiempoTerminado,(1000*vIntnumerosDigitados.value));
}

function iniciarConteo(){
    setInterval(IniciarReloj,1000);
    document.getElementById("xconteo").textContent = 30
}
function IniciarReloj(){
    let reloj = new Date();
    let hora = String(reloj.getHours()).padStart(2,0);
    let minutos = String(reloj.getMinutes()).padStart(2,0);
    let segundos = String(reloj.getSeconds()).padStart(2,0);
    let tiempo = document.getElementById("xconteo").textContent;
    document.getElementById("xconteo").textContent = tiempo - 1;

    let relojArmado = hora+": "+minutos+": "+segundos;

    let textoAreemplazar = document.getElementById("x");
    textoAreemplazar.textContent = relojArmado
}
function tiempoTerminado(){
    let sonidoAlarma = document.getElementById("AudioAlamra")
    let mensaje = "Alarma Encendida";
    let elementosalida = document.getElementById("textoAlarma1");   
    elementosalida.textContent = mensaje;
    elementosalida.style.color = "green"
    sonidoAlarma.play()
    document.getElementById("xconteo").textContent = 0
}

