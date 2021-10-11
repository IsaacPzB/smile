var i = 1;
var botonenviar = document.getElementById("btnEnviarDatos");
var botoneditar = document.getElementById("btnEditarDatos");
var divtabla = document.getElementById("cuadro");
var infoForm = {};

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
    if (h == true) {
      h = "Hombre";
      infoForm["GENERO"] = h;
    } else if (m == true) {
      m = "Mujer";
      infoForm["GENERO"] = m;
    } else if (a == true) {
      a = "Alien";
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
  document.getElementById("Genero").setItems = selectedRow.cells[5].innerHTML;
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


