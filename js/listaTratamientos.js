

export { insertaEnDOMListaTratamientos, suprimeDelDOMListaTratamientos };

function insertaEnDOMListaTratamientos() {
  insertaContenedorListaTratamientos();
}

function suprimeDelDOMListaTratamientos() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}

// Funciones auxiliares para la gestión del DOM

function insertaContenedorListaTratamientos() {
  const listaTratamientosNode = document.createElement("div");
  listaTratamientosNode.id = "listaTratamientos";
  listaTratamientosNode.classList = "listaTratamientos";
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(listaTratamientosNode);

  listaTratamientosNode.innerHTML = "Listado de Tratamientos";
}
