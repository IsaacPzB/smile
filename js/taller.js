
var botonenviar = document.getElementById("btnEnviarDatos");
var botoneditar = document.getElementById("btnEditarDatos");
var divtabla = document.getElementById("cuadro");
var infoForm = {};

var botonenviar2 = document.getElementById("btnEnviarDatos2");
var botoneditar2 = document.getElementById("btnEditarDatos2");
var divtabla2 = document.getElementById("cuadro2");
var infoForm2 = {};

var divtabla3 = document.getElementById("cuadro3");
var botonenviar3 = document.getElementById("btnEnviarDatos3");
var botoneditar3 = document.getElementById("btnEditarDatos3");
var infoForm3 = {};
mistorage = window.localStorage;
//Comienzo de metodos para el formulario de DiseñoSonrisa.html
function crear() {
    Servicio = document.getElementById("cmbServicios").value;
    MetodosPago = document.getElementById("cmbPago").value;
    CuotaInicial = document.getElementById("txtCuotaInicial").value;
    fecha = document.getElementById("fecha").value;
    TerminosCondiciones3 = document.getElementById("terminosycondiciones3").checked;

    if (Servicio == "Escoger..." ||
        CuotaInicial == "" ||
        MetodosPago == "Escoger..." ||
        TerminosCondiciones3 == false ||
        fecha == "") {
        alert("Debe Llenar Todos Los Campos");
    } else {

        tabla3 = document.getElementById("tabladatos3");
        filanueva3 = tabla3.insertRow(tabla3.length);
        var tratamiento = {
            Servicio, MetodosPago, CuotaInicial, fecha
        };
        if (mistorage.getItem("Servicios") === null) {
            let serv = [];
            serv.push(tratamiento);
            mistorage.setItem("Servicios", JSON.stringify(serv));

        } else {
            let serv = JSON.parse(localStorage.getItem("Servicios"));
            serv.push(tratamiento);
            mistorage.setItem("Servicios", JSON.stringify(serv));
        }
        leer();
        document.getElementById("form3").reset();
    }
}

function leer() {
    divtabla3.style.display = "";
    let serv = JSON.parse(localStorage.getItem("Servicios"));

    document.getElementById("tabladatos3").innerHTML = "";

    for (let x = 0; x < serv.length; x++) {
        infoForm3["ID"] = x + 1;
        infoForm3["SERVICIO"] = serv[x].Servicio;
        infoForm3["CUOTAINICIAL"] = serv[x].CuotaInicial;
        infoForm3["METODODEPAGO"] = serv[x].MetodosPago;
        infoForm3["FECHASERVICIO"] = serv[x].fecha;

        document.getElementById("tabladatos3").innerHTML += ""

        tabla3 = document.getElementById("tabladatos3");
        filanueva3 = tabla3.insertRow(tabla3.length);
        cell1 = filanueva3.insertCell(0);
        cell1.innerHTML = infoForm3.ID;

        cell2 = filanueva3.insertCell(1);
        cell2.innerHTML = infoForm3.SERVICIO;

        cell3 = filanueva3.insertCell(2);
        cell3.innerHTML = infoForm3.METODODEPAGO;

        cell4 = filanueva3.insertCell(3);
        cell4.innerHTML = infoForm3.CUOTAINICIAL;

        cell5 = filanueva3.insertCell(4);
        cell5.innerHTML = infoForm3.FECHASERVICIO;

        cell6 = filanueva3.insertCell(5);
        cell6.innerHTML = `<a class="btn btn-warning mx-2 " onClick="onEdit3(this)">Edit</a>
         <a class= "btn btn-danger " onClick="onDelete3(this)">Delete</a>`;
    }
}

function onEdit3(td3) {
    botoneditar3.disabled = false;
    botonenviar3.disabled = true;
    selectedRow = td3.parentElement.parentElement;
    var box = document.getElementById("cmbServicios");
    box.disabled = true;
    document.getElementById("cmbServicios").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cmbPago").value = selectedRow.cells[2].innerHTML;
    document.getElementById("txtCuotaInicial").value = selectedRow.cells[3].innerHTML;
    document.getElementById("fecha").setItems = selectedRow.cells[4].innerHTML;
}

function actualizar() {
    var Servicio = document.getElementById("cmbServicios").value;
    var MetodosPago = document.getElementById("cmbPago").value;
    var CuotaInicial = document.getElementById("txtCuotaInicial").value;
    var fecha = document.getElementById("fecha").value;
    var TerminosCondiciones3 = document.getElementById("terminosycondiciones3").checked;


    if (
        Servicio == "Escoger..." ||
        CuotaInicial == "" ||
        MetodosPago == "Escoger..." ||
        TerminosCondiciones3 == false ||
        fecha == ""
    ) {
        alert("Debe Llenar Todos Los Campos");
    } else {
        infoForm3["SERVICIO"] = Servicio;
        infoForm3["CUOTAINICIAL"] = CuotaInicial;
        infoForm3["METODODEPAGO"] = MetodosPago;
        infoForm3["FECHASERVICIO"] = fecha;

        let serv = JSON.parse(localStorage.getItem("Servicios"));
        for (let x = 0; x < serv.length; x++) {
            if (serv[x].Servicio === Servicio) {
                serv[x].CuotaInicial = CuotaInicial
                serv[x].MetodosPago = MetodosPago
                serv[x].fecha = fecha

                mistorage.setItem("Servicios", JSON.stringify(serv));
                break
            }
        }
        selectedRow.cells[1].innerHTML = infoForm3.SERVICIO;
        selectedRow.cells[2].innerHTML = infoForm3.METODODEPAGO;
        selectedRow.cells[3].innerHTML = infoForm3.CUOTAINICIAL;
        selectedRow.cells[4].innerHTML = infoForm3.FECHASERVICIO;

        botoneditar3.disabled = true;
        botonenviar3.disabled = false;
        alert("Fila editada exitosamente");
        document.getElementById("form3").reset();
    }
}
function onDelete3(td3) {
    if (confirm("¿Estas Seguro? si borras perderas toda la informacion")) {
        var num3 = document.getElementById("tabladatos3").rows.length;
        selectedRow = td3.parentElement.parentElement;
        var Servicio = selectedRow.cells[1].innerHTML;
        let serv = JSON.parse(localStorage.getItem("Servicios"));
        for (let x = 0; x < serv.length; x++) {
            if (serv[x].Servicio === Servicio) {

                serv.splice(x, 1);
            }
        }
        mistorage.setItem("Servicios", JSON.stringify(serv));
        leer();
        if (num3 == 1) {
            divtabla3.style.display = "none";
        }
    }
}
//fin de los metodos DiseñoSonrisa


//Comienzo de metodos para el formulario de PedirCita.html
function crear1() {
    var Nombre = document.getElementById("txtNombre").value;
    var Apellidos = document.getElementById("txtApellidos").value;
    var TipoDocumento = document.getElementById("cmbTipoDocumento").value;
    var IdDocumento = document.getElementById("txtid").value;

    var Edad = document.getElementById("txtEdad").value;
    var Tratamientos = document.getElementById("cmbTratamientos").value;
    var Email = document.getElementById("txtEmail").value;
    var TerminosCondiciones = document.getElementById(
        "terminosycondiciones"
    ).checked;
    var h = document.getElementById("radio1").checked;
    var m = document.getElementById("radio2").checked;
    var a = document.getElementById("radio3").checked;

    if (Nombre == "") {
        alert("Ingrese Su nombre");
    } else if (Apellidos == "") {
        alert("Ingrese su apellido");
    } else if (TipoDocumento == "Seleccionar Tipo") {
        alert("Debe Seleccionar un Tipo de Documento");
    } else if (IdDocumento == "") {
        alert("Ingrese su id");
    } else if (Edad == "") {
        alert("Debe Ingresar su Edad");
    } else if (Tratamientos == "Escoger...") {
        alert("Debe Seleccionar un Tratamiento");
    } else if (Email == "") {
        alert("Debe Ingresar su Email");
    } else if (TerminosCondiciones == false) {
        alert("Debe Aceptar Los Terminos y Condiciones");
    } else {
        var Genero = "";
        if (h == true) {
            h = "Hombre";
            Genero = "Hombre"
            infoForm["GENERO"] = Genero;
        } else if (m == true) {
            m = "Mujer";
            Genero = "Mujer"
            infoForm["GENERO"] = Genero;
        } else if (a == true) {
            a = "Alien";
            Genero = "Alien"
            infoForm["GENERO"] = Genero;
        } else if (h == false) {
            alert("Debe seleccionar un genero");
        } else if (m == false) {
            alert("Debe seleccionar un genero");
        } else if (a == false) {
            alert("Debe seleccionar un genero");
        }
        tabla = document.getElementById("tabladatos");
        filanueva = tabla.insertRow(tabla.length);
        var Paciente = {
            Nombre, Apellidos, TipoDocumento, IdDocumento, Genero, Edad, Tratamientos, Email
        };
        if (mistorage.getItem("Pacientes") === null) {
            let Pac = [];
            Pac.push(Paciente);
            mistorage.setItem("Pacientes", JSON.stringify(Pac));

        } else {
            let Pac = JSON.parse(localStorage.getItem("Pacientes"));
            Pac.push(Paciente);
            mistorage.setItem("Pacientes", JSON.stringify(Pac));
        }
        leer1();
        document.getElementById("form").reset();
    }
}

function leer1() {
    divtabla.style.display = "";
    let Pac = JSON.parse(localStorage.getItem("Pacientes"));

    document.getElementById("tabladatos").innerHTML = "";

    for (let x = 0; x < Pac.length; x++) {
        infoForm["ID"] = x + 1;
        infoForm["NOMBRE"] = Pac[x].Nombre;
        infoForm["APELLIDOS"] = Pac[x].Apellidos;
        infoForm["TIPODOCUEMNTO"] = Pac[x].TipoDocumento;
        infoForm["IDDOCUMENTO"] = Pac[x].IdDocumento;
        infoForm["GENERO"] = Pac[x].Genero;
        infoForm["EDAD"] = Pac[x].Edad;
        infoForm["TRATAMIENTOS"] = Pac[x].Tratamientos;
        infoForm["EMAIL"] = Pac[x].Email;

        document.getElementById("tabladatos").innerHTML += ""

        tabla = document.getElementById("tabladatos");
        filanueva = tabla.insertRow(tabla.length);

        cell1 = filanueva.insertCell(0);
        cell1.innerHTML = infoForm.ID;

        cell2 = filanueva.insertCell(1);
        cell2.innerHTML = infoForm.NOMBRE;

        cell3 = filanueva.insertCell(2);
        cell3.innerHTML = infoForm.APELLIDOS;

        cell4 = filanueva.insertCell(3);
        cell4.innerHTML = infoForm.TIPODOCUEMNTO;

        cell5 = filanueva.insertCell(4);
        cell5.innerHTML = infoForm.IDDOCUMENTO;

        cell6 = filanueva.insertCell(5);
        cell6.innerHTML = infoForm.GENERO;

        cell7 = filanueva.insertCell(6);
        cell7.innerHTML = infoForm.EDAD;

        cell8 = filanueva.insertCell(7);
        cell8.innerHTML = infoForm.TRATAMIENTOS;

        cell9 = filanueva.insertCell(8);
        cell9.innerHTML = infoForm.EMAIL;

        cell10 = filanueva.insertCell(9);
        cell10.innerHTML = `<a class="btn btn-warning mx-2 " onClick="onEdit(this)">Edit</a>
     <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;
    }
}

function onEdit(td) {
    botoneditar.disabled = false;
    botonenviar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    var box1 = document.getElementById("cmbTratamientos");
    box1.disabled = true;
    document.getElementById("txtNombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtApellidos").value =
        selectedRow.cells[2].innerHTML;
    document.getElementById("cmbTipoDocumento").value =
        selectedRow.cells[3].innerHTML;
    document.getElementById("txtid").value = selectedRow.cells[4].innerHTML;
    document.getElementById("txtEdad").value = selectedRow.cells[6].innerHTML;
    document.getElementById("cmbTratamientos").value =
        selectedRow.cells[7].innerHTML;
    document.getElementById("txtEmail").value = selectedRow.cells[8].innerHTML;
}

function actualizardatos() {
    Nombre = document.getElementById("txtNombre").value;
    Apellidos = document.getElementById("txtApellidos").value;
    TipoDocumento = document.getElementById("cmbTipoDocumento").value;
    IdDocumento = document.getElementById("txtid").value;
    Edad = document.getElementById("txtEdad").value;
    Tratamientos = document.getElementById("cmbTratamientos").value;
    Email = document.getElementById("txtEmail").value;
    TerminosCondiciones = document.getElementById("terminosycondiciones").checked;
    h = document.getElementById("radio1").checked;
    m = document.getElementById("radio2").checked;
    a = document.getElementById("radio3").checked;
    if (Nombre == "") {
        alert("Ingrese Su nombre");
    } else if (Apellidos == "") {
        alert("Ingrese su apellido");
    } else if (TipoDocumento == "Seleccionar Tipo") {
        alert("Debe Seleccionar un Tipo de Documento");
    } else if (IdDocumento == "") {
        alert("Ingrese su id");
    } else if (Edad == "") {
        alert("Debe Ingresar su Edad");
    } else if (Tratamientos == "Escoger...") {
        alert("Debe Seleccionar un Tratamiento");
    } else if (Email == "") {
        alert("Debe Ingresar su Email");
    } else {
        var Genero = "";
        if (h == true) {
            h = "Hombre";
            Genero = "Hombre"
            infoForm["GENERO"] = Genero;
        } else if (m == true) {
            m = "Mujer";
            Genero = "Mujer"
            infoForm["GENERO"] = Genero;
        } else if (a == true) {
            a = "Alien";
            Genero = "Alien"
            infoForm["GENERO"] = Genero;
        } else if (h == false) {
            alert("Debe seleccionar un genero");
        } else if (m == false) {
            alert("Debe seleccionar un genero");
        } else if (a == false) {
            alert("Debe seleccionar un genero");
        }
        infoForm["NOMBRE"] = Nombre;
        infoForm["APELLIDOS"] = Apellidos;
        infoForm["TIPODOCUEMNTO"] = TipoDocumento;
        infoForm["IDDOCUMENTO"] = IdDocumento;
        infoForm["GENERO"] = Genero;
        infoForm["EDAD"] = Edad;
        infoForm["TRATAMIENTOS"] = Tratamientos;
        infoForm["EMAIL"] = Email;

        let Pac = JSON.parse(localStorage.getItem("Pacientes"));
        for (let x = 0; x < Pac.length; x++) {
            if (Pac[x].Tratamientos === Tratamientos) {
                Pac[x].Nombre = Nombre
                Pac[x].Apellidos = Apellidos
                Pac[x].TipoDocumento = TipoDocumento
                Pac[x].IdDocumento = IdDocumento
                Pac[x].Genero = Genero
                Pac[x].Edad = Edad
                Pac[x].Email = Email

                mistorage.setItem("Pacientes", JSON.stringify(Pac));
                break
            }
        }
        selectedRow.cells[1].innerHTML = infoForm.NOMBRE;
        selectedRow.cells[2].innerHTML = infoForm.APELLIDOS;
        selectedRow.cells[3].innerHTML = infoForm.TIPODOCUEMNTO;
        selectedRow.cells[4].innerHTML = infoForm.IDDOCUMENTO;
        selectedRow.cells[5].innerHTML = infoForm.GENERO;
        selectedRow.cells[6].innerHTML = infoForm.EDAD;
        selectedRow.cells[7].innerHTML = infoForm.TRATAMIENTOS;
        selectedRow.cells[8].innerHTML = infoForm.EMAIL;

        botoneditar.disabled = true;
        botonenviar.disabled = false;
        alert("Fila editada exitosamente");
        document.getElementById("form").reset();

    }
}
function onDelete(td) {
    if (confirm("¿Estas Seguro? si borras perderas toda la informacion")) {
        var num = document.getElementById("tabladatos").rows.length;
        selectedRow = td.parentElement.parentElement;
        var Nombre = selectedRow.cells[1].innerHTML;
        let Pac = JSON.parse(localStorage.getItem("Pacientes"));
        for (let x = 0; x < Pac.length; x++) {
            if (Pac[x].Nombre === Nombre) {

                Pac.splice(x, 1);
            }
        }
        mistorage.setItem("Pacientes", JSON.stringify(Pac));
        leer1();
        if (num == 1) {
            divtabla.style.display = "none";
        }
    }
}
//fin de los metodos Pedir cita


//Comienzo de metodos para el formulario de contactenos.html
function crear2() {
    var Nombre2 = document.getElementById("ExampleNombre").value;
    var Telefono2 = document.getElementById("ExampleNumber").value;
    var IdDocumento2 = document.getElementById("ExampleId").value;

    var Edad2 = document.getElementById("ExampleEdad").value;
    var Email2 = document.getElementById("exampleInputEmail1").value;
    var Calificacion2 = document.getElementById("customRange2").value;
    var TerminosCondiciones2 = document.getElementById(
        "exampleCheck1"
    ).checked;

    var correcto = true;
    if (Nombre2 == "") {
        correcto = false;
    } else if (Telefono2 == "") {
        correcto = false;
    } else if (IdDocumento2 == "") {
        correcto = false;
    } else if (Edad2 == "") {
        correcto = false;
    } else if (Email2 == "") {
        correcto = false;
    } else if (TerminosCondiciones2 == false) {
        correcto = false;
    } else if (correcto == true) {
        tabla2 = document.getElementById("tabladatos2");
        filanueva2 = tabla2.insertRow(tabla2.length);
        let Usuario = {
            Nombre2, Telefono2, Edad2, IdDocumento2, Email2, Calificacion2
        };
        if (mistorage.getItem("User") === null) {
            let Usuarios = [];
            Usuarios.push(Usuario);
            mistorage.setItem("User", JSON.stringify(Usuarios));

        } else {
            let Usuarios = JSON.parse(localStorage.getItem("User"));
            Usuarios.push(Usuario);
            mistorage.setItem("User", JSON.stringify(Usuarios));
        }

        leer2();
        document.getElementById("form2").reset();
    }
}

function leer2() {
    divtabla2.style.display = "";
    let Usuarios = JSON.parse(localStorage.getItem("User"));

    document.getElementById("tabladatos2").innerHTML = "";

    for (let x = 0; x < Usuarios.length; x++) {
        infoForm2["ID"] = x + 1;
        infoForm2["NOMBRE"] = Usuarios[x].Nombre2;
        infoForm2["TELEFONO"] = Usuarios[x].Telefono2;
        infoForm2["IDDOCUMENTO"] = Usuarios[x].IdDocumento2;
        infoForm2["EDAD"] = Usuarios[x].Edad2;
        infoForm2["EMAIL"] = Usuarios[x].Email2;
        infoForm2["CALIFICACION"] = Usuarios[x].Calificacion2;

        document.getElementById("tabladatos2").innerHTML += ""

        tabla2 = document.getElementById("tabladatos2");
        filanueva2 = tabla2.insertRow(tabla2.length);
        cell1 = filanueva2.insertCell(0);
        cell1.innerHTML = infoForm2.ID;

        cell2 = filanueva2.insertCell(1);
        cell2.innerHTML = infoForm2.NOMBRE;

        cell3 = filanueva2.insertCell(2);
        cell3.innerHTML = infoForm2.TELEFONO;

        cell4 = filanueva2.insertCell(3);
        cell4.innerHTML = infoForm2.IDDOCUMENTO;

        cell5 = filanueva2.insertCell(4);
        cell5.innerHTML = infoForm2.EDAD;

        cell6 = filanueva2.insertCell(5);
        cell6.innerHTML = infoForm2.EMAIL;

        cell7 = filanueva2.insertCell(6);
        cell7.innerHTML = infoForm2.CALIFICACION;

        cell8 = filanueva2.insertCell(7);
        cell8.innerHTML = `<a class="btn btn-warning mx-2 " onClick="onEdit2(this)">Edit</a>
   <a class= "btn btn-danger " onClick="onDelete2(this)">Delete</a>`;
    }
}

function onEdit2(td2) {
    botoneditar2.disabled = false;
    botonenviar2.disabled = true;
    selectedRow = td2.parentElement.parentElement;
    var box2 = document.getElementById("customRange2");
    box2.disabled = true;
    document.getElementById("ExampleNombre").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ExampleNumber").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ExampleId").value = selectedRow.cells[3].innerHTML;
    document.getElementById("ExampleEdad").value = selectedRow.cells[4].innerHTML;
    document.getElementById("exampleInputEmail1").value = selectedRow.cells[5].innerHTML;
    document.getElementById("customRange2").value = selectedRow.cells[6].innerHTML;
}

function actualizardatos2() {
    var Nombre2 = document.getElementById("ExampleNombre").value;
    var Telefono2 = document.getElementById("ExampleNumber").value;
    var IdDocumento2 = document.getElementById("ExampleId").value;

    var Edad2 = document.getElementById("ExampleEdad").value;
    var Email2 = document.getElementById("exampleInputEmail1").value;
    var Calificacion2 = document.getElementById("customRange2").value;
    var TerminosCondiciones2 = document.getElementById(
        "exampleCheck1"
    ).checked;

    var correcto = true;
    if (Nombre2 == "") {
        correcto = false;
    } else if (Telefono2 == "") {
        correcto = false;
    } else if (IdDocumento2 == "") {
        correcto = false;
    } else if (Edad2 == "") {
        correcto = false;
    } else if (Email2 == "") {
        correcto = false;
    } else if (TerminosCondiciones2 == false) {
        correcto = false;
    } else if (correcto == true) {

        infoForm2["NOMBRE"] = Nombre2;
        infoForm2["TELEFONO"] = Telefono2;
        infoForm2["IDDOCUMENTO"] = IdDocumento2;
        infoForm2["EDAD"] = Edad2;
        infoForm2["EMAIL"] = Email2;
        infoForm2["CALIFICACION"] = Calificacion2;

        let Usuarios = JSON.parse(localStorage.getItem("User"));
        for (let x = 0; x < Usuarios.length; x++) {
            if (Usuarios[x].Calificacion2 === Calificacion2) {
                Usuarios[x].Nombre2 = Nombre2
                Usuarios[x].Telefono2 = Telefono2
                Usuarios[x].IdDocumento2 = IdDocumento2
                Usuarios[x].Edad2 = Edad2
                Usuarios[x].Email2 = Email2

                mistorage.setItem("User", JSON.stringify(Usuarios));
                break
            }
        }
        selectedRow.cells[1].innerHTML = infoForm2.NOMBRE;
        selectedRow.cells[2].innerHTML = infoForm2.TELEFONO;
        selectedRow.cells[3].innerHTML = infoForm2.IDDOCUMENTO;
        selectedRow.cells[4].innerHTML = infoForm2.EDAD;
        selectedRow.cells[5].innerHTML = infoForm2.EMAIL;
        selectedRow.cells[6].innerHTML = infoForm2.CALIFICACION;

        botoneditar2.disabled = true;
        botonenviar2.disabled = false;
        alert("Fila editada exitosamente");
        document.getElementById("form2").reset();
    }
}
function onDelete2(td2) {
    if (confirm("¿Estas Seguro? si borras perderas toda la informacion")) {
        var num2 = document.getElementById("tabladatos2").rows.length;
        selectedRow = td2.parentElement.parentElement;
        var Nombre2 = selectedRow.cells[1].innerHTML;
        let Usuarios = JSON.parse(localStorage.getItem("User"));
        for (let x = 0; x < Usuarios.length; x++) {
            if (Usuarios[x].Nombre2 === Nombre2) {

                Usuarios.splice(x, 1);
            }
        }
        mistorage.setItem("User", JSON.stringify(Usuarios));
        leer2();
        if (num2 == 1) {
            divtabla2.style.display = "none";
        }
    }
}
leer2();
//fin de los metodos contactenos
leer1();
leer();