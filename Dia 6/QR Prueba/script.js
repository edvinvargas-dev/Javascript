function guardarInformacion() {
    // Obtener el valor del campo de texto
    let datos = document.getElementById("Placas").value;

    // Convertir a mayúsculas
    let datosEnMayusculas = datos.toUpperCase();

    // Mostrar los datos convertidos en el párrafo
    let pegarDatos = document.getElementById("pegarDatos");
    pegarDatos.textContent = datosEnMayusculas;

    // Generar código de barras
    JsBarcode("#codigoBarras", datosEnMayusculas, {
        format: "CODE128",
        lineColor: "#000",
        width: 2,
        height: 50
    });
}

function reiniciarDatos() {
    location.reload();
}
