
//Importaciones y exportaciones
import { insertaEnDOMListaDentistas } from "./listaDentistas.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import {
  recuperaNombreDentista,
  recuperaAtributoDentista,
  actualizaDentista,
  altaDentista,
} from "./datos/modeloDentistas.js";

export { insertaEnDOMDatosDentista, suprimeDelDOMDatosDentista };

let tipoInteraccion = "";
let idDentista = "";


// Funciones para la gestión del DOM (datos del Dentista)

function insertaEnDOMDatosDentista(id, tipo) {
  tipoInteraccion = tipo;
  idDentista = id;
  actualizaVistaActual("datosDentista");
  insertaContenedorDatosDentista();

  insertaNombreDentistaEnContenedor();
  insertaDentistaActivoEnContenedor();
  insertaGeneroDentistaEnContenedor();
  insertaBirthdateDentistaEnContenedor();
  insertaBotonesEnContenedor();

  if (tipoInteraccion == "consulta") {
    actualizaValoresContenedor();
  }

  //Gestión de los eventos pulsar en el boton Volver y Guardar
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.addEventListener("click", respuestaPulsarBotonVolver);
  const botonGuardarNode = document.getElementById("botonGuardar");
  botonGuardarNode.addEventListener("click", respuestaPulsarBotonGuardar);
}

function suprimeDelDOMDatosDentista() {
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.removeEventListener("click", respuestaPulsarBotonVolver);

  const botonGuardarNode = document.getElementById("botonGuardar");
  botonGuardarNode.removeEventListener("click", respuestaPulsarBotonGuardar);

  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}


// Funciones auxiliares para la gestión del DOM (Dentistas)

function insertaContenedorDatosDentista() {
  const datosDentistaNode = document.createElement("div");
  datosDentistaNode.id = "datosDentista";
  datosDentistaNode.dataset.dentista = idDentista;
  datosDentistaNode.classList = "datosDentista";
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(datosDentistaNode);
}

function insertaNombreDentistaEnContenedor() {

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Nombre: ", "name");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "name";
  inputNode.type = "text";
  nodeDiv.appendChild(inputNode);
}

function insertaDentistaActivoEnContenedor() {
  // El estado activo del registro del dentista se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Activo: ", "active");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "active";
  inputNode.type = "checkbox";
  nodeDiv.appendChild(inputNode);
}

function insertaGeneroDentistaEnContenedor() {

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Género: ", "gender");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo select al nodo DIV
  const selectNode = document.createElement("select");
  selectNode.id = "gender";
  nodeDiv.appendChild(selectNode);

  const optionsHTML = `
     <option id="maleGender"    value="male">male</option>
     <option id="femaleGender"  value="female">female</option>
     <option id="otherGender"   value="other">other</option>
     <option id="unknownGender" value="unknown" selected>unknown</option>
  `;
  selectNode.innerHTML = optionsHTML;
}

function insertaBirthdateDentistaEnContenedor() {
  // El cumpleaños del dentista se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosPacienteNode = document.getElementById("datosDentista");
  datosPacienteNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Cumpleaños: ", "birthdate");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "birthdate";
  inputNode.type = "date";
  nodeDiv.appendChild(inputNode);
}


function insertaBotonesEnContenedor() {
  // Se crea un contenedor donde se incluyen todos los botones
  const divNode = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(divNode);
  // Añade atributos id y class para el acceso y los estilos
  divNode.id = "botones";
  divNode.classList = "botones";

  const botonVolverNode = creaBotonNode("Volver", "botonVolver");
  divNode.appendChild(botonVolverNode);

  const botonGuardarNode = creaBotonNode("Guardar", "botonGuardar");
  divNode.appendChild(botonGuardarNode);
}

function creaBotonNode(texto, valorId) {
  const botonNode = document.createElement("button");
  botonNode.innerText = texto;
  botonNode.id = valorId;
  botonNode.classList = "boton";
  return botonNode;
}

function creaLabelNode(texto, valueFor) {
  const labelNode = document.createElement("label");
  labelNode.innerText = texto;
  labelNode.setAttribute("for", valueFor);

  return labelNode;
}

function actualizaValoresContenedor() {
  const nombreNode = document.getElementById("name");
  nombreNode.value = recuperaNombreDentista(idDentista);

  const activeNode = document.getElementById("active");
  activeNode.checked = recuperaAtributoDentista(idDentista, "active");

  const generoDentista = recuperaAtributoDentista(idDentista, "gender");
  const selector = generoDentista + "Gender";
  const genderNode = document.getElementById(selector);

  genderNode.selected = "true";
}

// Funciones de respuesta a los eventos

function respuestaPulsarBotonVolver() {
  suprimeDelDOMDatosDentista();
  actualizaVistaActual("listaDentistas");
  insertaEnDOMListaDentistas();
}

function respuestaPulsarBotonGuardar() {
  const datosDentista = recolectaDatosDentista();

  switch (tipoInteraccion) {
    case "consulta":
      const datosDentistaNode = document.getElementById("datosDentista");
      const idDentista = datosDentistaNode.dataset.dentista;

      actualizaDentista(idDentista, datosDentista);
      break;
    case "alta":
      altaDentista(datosDentista);
      break;
  }

  respuestaPulsarBotonVolver();
}

function recolectaDatosDentista() {
  const datosDentista = {};

  const nameNode = document.getElementById("name");
  datosDentista.name = [{ text: nameNode.value }];

  const genderNode = document.getElementById("gender");
  datosDentista.gender = genderNode.value;

  const activeNode = document.getElementById("active");
  datosDentista.active = activeNode.checked;

  return datosDentista;
}
