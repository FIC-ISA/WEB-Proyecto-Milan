export { insertaEnDOMContenidoPaginaComponentes, suprimeDelDOMContenidoPaginaComponentes };

const contenidoHTML = `
<div id="contenidoInicial" class="contenidoInicial">
  <h1>Bienvenido a la página de los componentes del grupo</h1>
  <img class="imagenGrupo" src="./img/Universidad-de-Sevilla.webp" alt="Imagen de Grupo FIC" width="22%" />
  <p>Componentes del grupo</p>
  <ul class="listaComponentes" style="display: flex; list-style: none; padding: 0;">
    <li class="itemComponente" style="flex: 1; margin-right: 25px; ">
      <img src="./img/150x150.componente01.avatarMaker.png" alt="María del Valle Alonso" /><br> María del Valle Alonso <br> maraloort 
    </li>
    <li class="itemComponente" style="flex: 1; margin-right: 25px; ">
      <img src="./img/150x150.componente01.avatarMaker.png" alt="Rafael Prieto" /><br> Rafael Prieto <br> rafprigar
    </li>
    <li class="itemComponente" style="flex: 1; margin-right: 25px; ">
      <img src="./img/150x150.componente02.avatarMaker.png" alt="Alfonso Ibáñez" /><br> Alfonso Ibáñez 
    </li>
    <li class="itemComponente" style="flex: 1; margin-right: 25px; ">
      <img src="./img/150x150.componente01.avatarMaker.png" alt="Alberto García" /><br> Alberto García <br> albgarmar16
    </li>
  </ul>
</div>
`;




function insertaEnDOMContenidoPaginaComponentes() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = contenidoHTML;
}

function suprimeDelDOMContenidoPaginaComponentes() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}