var i = 1;
var botonenviar = document.getElementById("btnEnviarDatos");
var botoneditar = document.getElementById("btnEditarDatos");
var divtabla = document.getElementById("cuadro");
var infoForm = {};

var ii = 1;
var botonenviar2 = document.getElementById("btnEnviarDatos2");
var botoneditar2 = document.getElementById("btnEditarDatos2");
var divtabla2 = document.getElementById("cuadro2");
var infoForm2 = {};

var divtabla3 = document.getElementById("cuadro3");
var iii = 1;
var botonenviar3 = document.getElementById("btnEnviarDatos3");
var botoneditar3 = document.getElementById("btnEditarDatos3");
var infoForm3 = {};

function sendDate() {
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
      Genero = "Hombre";
      infoForm["GENERO"] = h;
    } else if (m == true) {
      m = "Mujer";
      Genero = "Mujer";
      infoForm["GENERO"] = m;
    } else if (a == true) {
      a = "Alien";
      Genero = "Alien";
      infoForm["GENERO"] = a;
    } else if (h == false) {
      alert("Debe seleccionar un genero");
    } else if (m == false) {
      alert("Debe seleccionar un genero");
    } else if (a == false) {
      alert("Debe seleccionar un genero");
    }

    infoForm["ID"] = i++;
    infoForm["NOMBRE"] = Nombre;
    infoForm["APELLIDOS"] = Apellidos;
    infoForm["TIPODOCUEMNTO"] = TipoDocumento;
    infoForm["IDDOCUMENTO"] = IdDocumento;

    infoForm["EDAD"] = Edad;
    infoForm["TRATAMIENTOS"] = Tratamientos;
    infoForm["EMAIL"] = Email;

    var Tabla = document.getElementById("tabladatos");
    var filanueva = Tabla.insertRow(Tabla.length);

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
    document.getElementById("form").reset();
    divtabla.style.display = "";

    mistorage = window.localStorage;
    let Paciente = {
      Nombre,
      Apellidos,
      TipoDocumento,
      IdDocumento,
      Genero,
      Edad,
      Tratamientos,
      Email,
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
    document.getElementById("form").reset();
  }
}

function sendDate2() {
  var Nombre2 = document.getElementById("ExampleNombre").value;
  var Telefono2 = document.getElementById("ExampleNumber").value;
  var IdDocumento2 = document.getElementById("ExampleId").value;

  var Edad2 = document.getElementById("ExampleEdad").value;
  var Email2 = document.getElementById("exampleInputEmail1").value;
  var Calificacion2 = document.getElementById("customRange2").value;
  var TerminosCondiciones2 = document.getElementById("exampleCheck1").checked;

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
    infoForm2["ID"] = ii++;
    infoForm2["NOMBRE"] = Nombre2;
    infoForm2["TELEFONO"] = Telefono2;
    infoForm2["IDDOCUMENTO"] = IdDocumento2;
    infoForm2["EDAD"] = Edad2;
    infoForm2["EMAIL"] = Email2;
    infoForm2["CALIFICACION"] = Calificacion2;

    var Tabla2 = document.getElementById("tabladatos2");
    var filanueva2 = Tabla2.insertRow(Tabla2.length);

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
    document.getElementById("form2").reset();

    divtabla2.style.display = "";

    mistorage = window.localStorage;
    let Usuario = {
      Nombre2,
      Telefono2,
      Edad2,
      IdDocumento2,
      Email2,
      Calificacion2,
    };
    if (mistorage.getItem("Clientes") === null) {
      let Usuarios = [];
      Usuarios.push(Usuario);
      mistorage.setItem("Clientes", JSON.stringify(Usuarios));
    } else {
      let Usuarios = JSON.parse(localStorage.getItem("Clientes"));
      Usuarios.push(Usuario);
      mistorage.setItem("Clientes", JSON.stringify(Usuarios));
    }
    document.getElementById("form2").reset();
  }
}

function sendDate3() {
  var Servicio = document.getElementById("cmbServicios").value;
  var MetodosPago = document.getElementById("cmbPago").value;
  var CuotaInicial = document.getElementById("txtCuotaInicial").value;
  var fecha = document.getElementById("fecha").value;
  var TerminosCondiciones3 = document.getElementById(
    "terminosycondiciones3"
  ).checked;

  if (
    Servicio == "Escoger..." ||
    CuotaInicial == "" ||
    MetodosPago == "Escoger..." ||
    TerminosCondiciones3 == false ||
    fecha == ""
  ) {
    alert("Debe Llenar Todos Los Campos");
  } else {
    infoForm3["ID"] = iii++;
    infoForm3["SERVICIO"] = Servicio;
    infoForm3["CUOTAINICIAL"] = CuotaInicial;
    infoForm3["METODODEPAGO"] = MetodosPago;
    infoForm3["FECHASERVICIO"] = fecha;

    var tabla3 = document.getElementById("tabladatos3");
    var filanueva3 = tabla3.insertRow(tabla3.length);

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
    document.getElementById("form3").reset();
    divtabla3.style.display = "";

    mistorage = window.localStorage;
    let tratamiento = {
      Servicio,
      MetodosPago,
      CuotaInicial,
      fecha,
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
    document.getElementById("form3").reset();
  }
}

function onEdit(td) {
  botoneditar.disabled = false;
  botonenviar.disabled = true;
  selectedRow = td.parentElement.parentElement;
  document.getElementById("txtNombre").value = selectedRow.cells[1].innerHTML;
  document.getElementById("txtApellidos").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("cmbTipoDocumento").value =
    selectedRow.cells[3].innerHTML;
  document.getElementById("txtid").value = selectedRow.cells[4].innerHTML;

  var h = document.getElementById("radio1").checked;
  var m = document.getElementById("radio2").checked;
  var a = document.getElementById("radio3").checked;
  var Genero = "";
  if (h == true) {
    h = "Hombre";
    Genero = "Hombre";
    infoForm["GENERO"] = h;
  } else if (m == true) {
    m = "Mujer";
    Genero = "Mujer";
    infoForm["GENERO"] = m;
  } else if (a == true) {
    a = "Alien";
    Genero = "Alien";
    infoForm["GENERO"] = a;
  }

  document.getElementById("txtEdad").value = selectedRow.cells[6].innerHTML;
  document.getElementById("cmbTratamientos").value =
    selectedRow.cells[7].innerHTML;
  document.getElementById("txtEmail").value = selectedRow.cells[8].innerHTML;
}

function onEdit2(td2) {
  botoneditar2.disabled = false;
  botonenviar2.disabled = true;
  selectedRow = td2.parentElement.parentElement;
  document.getElementById("ExampleNombre").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("ExampleNumber").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("ExampleId").value = selectedRow.cells[3].innerHTML;
  document.getElementById("ExampleEdad").value = selectedRow.cells[4].innerHTML;
  document.getElementById("exampleInputEmail1").value =
    selectedRow.cells[5].innerHTML;
  document.getElementById("customRange2").value =
    selectedRow.cells[6].innerHTML;
}

function onEdit3(td3) {
  botoneditar3.disabled = false;
  botonenviar3.disabled = true;
  selectedRow = td3.parentElement.parentElement;
  document.getElementById("cmbServicios").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("cmbPago").value = selectedRow.cells[2].innerHTML;
  document.getElementById("txtCuotaInicial").value =
    selectedRow.cells[3].innerHTML;
  document.getElementById("fecha").setItems = selectedRow.cells[4].innerHTML;
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
    infoForm["NOMBRE"] = Nombre;
    infoForm["APELLIDOS"] = Apellidos;
    infoForm["TIPODOCUEMNTO"] = TipoDocumento;
    infoForm["IDDOCUMENTO"] = IdDocumento;
    infoForm["EDAD"] = Edad;
    infoForm["TRATAMIENTOS"] = Tratamientos;
    infoForm["EMAIL"] = Email;

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

function actualizardatos2() {
  Nombre2 = document.getElementById("ExampleNombre").value;
  Telefono2 = document.getElementById("ExampleNumber").value;
  IdDocumento2 = document.getElementById("ExampleId").value;

  Edad2 = document.getElementById("ExampleEdad").value;
  Email2 = document.getElementById("exampleInputEmail1").value;
  Calificacion2 = document.getElementById("customRange2").value;
  TerminosCondiciones2 = document.getElementById("exampleCheck1").checked;
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

function actualizar() {
  var Servicio = document.getElementById("cmbServicios").value;
  var MetodosPago = document.getElementById("cmbPago").value;
  var CuotaInicial = document.getElementById("txtCuotaInicial").value;
  var fecha = document.getElementById("fecha").value;
  var TerminosCondiciones3 = document.getElementById(
    "terminosycondiciones3"
  ).checked;

  if (
    Servicio == "Escoger..." ||
    CuotaInicial == "" ||
    MetodosPago == "Escoger..." ||
    TerminosCondiciones3 == false ||
    fecha == ""
  ) {
    alert("Debe Llenar Todos Los Campos");
  } else {
    infoForm3["ID"] = iii++;
    infoForm3["SERVICIO"] = Servicio;
    infoForm3["CUOTAINICIAL"] = CuotaInicial;
    infoForm3["METODODEPAGO"] = MetodosPago;
    infoForm3["FECHASERVICIO"] = fecha;

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

function onDelete(td) {
  if (confirm("¿Estas Seguro? si borras perderas toda la informacion")) {
    row = td.parentElement.parentElement;
    document.getElementById("tabladatos").deleteRow(row.rowIndex);

    var num = document.getElementById("tabladatos").rows.length;

    if (num == 1) {
      divtabla.style.display = "none";
    }
  }
}

function onDelete2(td2) {
  if (confirm("¿Estas Seguro? si borras perderas toda la informacion")) {
    row = td2.parentElement.parentElement;
    document.getElementById("tabladatos2").deleteRow(row.rowIndex);
    var num2 = document.getElementById("tabladatos2").rows.length;
    ii--;
    if (num2 == 1) {
      divtabla2.style.display = "none";
    }
  }
}

function onDelete3(td3) {
  if (confirm("¿Estas Seguro? si borras perderas toda la informacion")) {
    row = td3.parentElement.parentElement;
    document.getElementById("tabladatos3").deleteRow(row.rowIndex);

    var num3 = document.getElementById("tabladatos3").rows.length;

    if (num3 == 1) {
      divtabla3.style.display = "none";
    }
  }
}

function local1() {
  mistorage = window.localStorage;
  let Paciente = {
    Nombre,
    Apellidos,
    TipoDocumento,
    IdDocumento,
    Genero,
    Edad,
    Tratamientos,
    Email,
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
  document.getElementById("form").reset();
}
