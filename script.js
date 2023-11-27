// Identificación del proyecto
const nombreDeGrupoNode = document.getElementById("nombreDeGrupo");
nombreDeGrupoNode.innerText = "Milán";

import { cargaDatosDentistas } from "./js/datos/datosInsertados.js";
import { insertaEnDOMOpcionesMenu } from "./js/menuOpciones.js";
import { insertaEnDOMContenidoInicial } from "./js/contenidoPaginaInicial.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Función de comienzo

function comienzo() {
  cargaDatosDentistas();
  insertaEnDOMOpcionesMenu();
  insertaEnDOMContenidoInicial();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Programa principal

comienzo();
