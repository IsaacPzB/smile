var divtabla = document.getElementById("cuadro");
var i = 1;
var botonenviar = document.getElementById("bntEnviarDatos");
var botoneditar = document.getElementById("btnEditarDatos");
var infoForm = {};

function sendDate1() {
  var Servicio = document.getElementById("cmbServicios").value;
  var MetodosPago = document.getElementById("cmbPago").value;
  var CuotaInicial = document.getElementById("txtCuotaInicial").value;
  var fecha = document.getElementById("fecha").value;
  var TerminosCondiciones = document.getElementById(
    "terminosycondiciones"
  ).checked;

  if (
    Servicio == "Escoger..." ||
    CuotaInicial == "" ||
    MetodosPago == "Escoger..." ||
    TerminosCondiciones == false ||
    fecha == ""
  ) {
    alert("Debe Llenar Todos Los Campos");
  } else {
    infoForm["ID"] = i++;
    infoForm["SERVICIO"] = Servicio;
    infoForm["CUOTAINICIAL"] = CuotaInicial;
    infoForm["METODODEPAGO"] = MetodosPago;
    infoForm["FECHASERVICIO"] = fecha;

    var tabla = document.getElementById("tabladatos");
    var filanueva = tabla.insertRow(tabla.length);

    cell1 = filanueva.insertCell(0);
    cell1.innerHTML = infoForm.ID;

    cell2 = filanueva.insertCell(1);
    cell2.innerHTML = infoForm.SERVICIO;

    cell3 = filanueva.insertCell(2);
    cell3.innerHTML = infoForm.METODODEPAGO;

    cell4 = filanueva.insertCell(3);
    cell4.innerHTML = infoForm.CUOTAINICIAL;

    cell5 = filanueva.insertCell(4);
    cell5.innerHTML = infoForm.FECHASERVICIO;

    cell6 = filanueva.insertCell(5);
    cell6.innerHTML = `<a class="btn btn-warning mx-2 " onClick="onEdit(this)">Edit</a>
     <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;
    document.getElementById("form").reset();
    divtabla.style.display = "";
  }
}

function onEdit(td) {
  botoneditar.disabled = false;
  botonenviar.disabled = true;
  selectedRow = td.parentElement.parentElement;
  document.getElementById("cmbServicios").value =
    selectedRow.Cells[1].innerHTML;
  document.getElementById("cmbPago").value = selectedRow.Cells[2].innerHTML;
  document.getElementById("txtCuotaInicial").value =
    selectedRow.Cells[3].innerHTML;
  document.getElementById("fecha").setItems = selectedRow.Cells[4].innerHTML;
}

function actualizar() {
  var Servicio = document.getElementById("cmbServicios").value;
  var MetodosPago = document.getElementById("cmbPago").value;
  var CuotaInicial = document.getElementById("txtCuotaInicial").value;
  var fecha = document.getElementById("fecha").value;
  var TerminosCondiciones = document.getElementById(
    "terminosycondiciones"
  ).checked;

  if (
    Servicio == "Escoger..." ||
    CuotaInicial == "" ||
    MetodosPago == "Escoger..." ||
    TerminosCondiciones == false ||
    fecha == ""
  ) {
    alert("Debe Llenar Todos Los Campos");
  } else {
    infoForm["ID"] = i++;
    infoForm["SERVICIO"] = Servicio;
    infoForm["CUOTAINICIAL"] = CuotaInicial;
    infoForm["METODODEPAGO"] = MetodosPago;
    infoForm["FECHASERVICIO"] = fecha;

    selectedRow.Cells[1].innerHTML = infoForm.SERVICIO;
    selectedRow.Cells[2].innerHTML = infoForm.CUOTAINICIAL;
    selectedRow.Cells[3].innerHTML = infoForm.METODODEPAGO;
    selectedRow.Cells[4].innerHTML = infoForm.FECHASERVICIO;

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
