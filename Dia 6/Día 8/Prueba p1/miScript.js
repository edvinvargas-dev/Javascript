let vArrEmpleado = [];

function objEmpleado(nacionalidad, nombre, apellido, nacimiento, cargo){
    this.nacionalidad = nacionalidad;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function agregarEmpleado(){
    let nacionalidad = document.getElementById("txtLegajo").value;
    let nombre = document.getElementById("txtNombre").value;
    let apellido = document.getElementById("txtApellido").value;
    let nacimiento = document.getElementById("txtNacimiento").value;
    let cargo = document.getElementById("txtCargo").value;

    let empleado = new objEmpleado(nacionalidad, nombre, apellido, nacimiento, cargo);
    vArrEmpleado.push(empleado);

    alert("Empleado registrado con Exito");
    limpiarinformacion();

}

function mostrarEmpleados(){
    let lista = "";
    for(empleado of vArrEmpleado){
        for(let prop in empleado){
            lista = lista+prop+": "+empleado[prop]+", ";
        } lista = lista+"\n";
    }alert(lista)
}

function limpiarinformacion(){
    document.getElementById("txtLegajo").value="";
    document.getElementById("txtNombre").value="";
    document.getElementById("txtApellido").value="";
    document.getElementById("txtNacimiento").value="";
    document.getElementById("txtCargo").value="";
}