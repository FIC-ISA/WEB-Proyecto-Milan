//Importaciones y exportaciones
export {
    recuperaTodosLosDentistas,
    recuperaDentista,
    recuperaNombreDentista,
    recuperaAtributoDentista,
    actualizaDentista,
    altaDentista,
  };

//Funciones de gestión de dentistas
function recuperaTodosLosDentistas() {
    const dentistasItem = JSON.parse(localStorage.getItem("dentistas"));
    const dentistas = dentistasItem ?? [];
    return dentistas;
  }

function recuperaDentista(id) {
    const dentistaItem = JSON.parse(localStorage.getItem(id));
    return dentistaItem ?? {};
  }

  function recuperaNombreDentista(id) {
    const dentista = recuperaDentista(id);
    return dentista.name[0].text ?? "Unknown";
  }
  
  function recuperaAtributoDentista(id, atributo) {
    let valor = "";
    const datosDentista = recuperaDentista(id);
  
    switch (atributo) {
      case "name":
        valor = datosDentista.name[0] ?? "unknown";
        break;
      case "surname":
        valor = datosDentista.surname[0] ?? "unknown";
        break;
      case "gender":
        valor = datosDentista.gender ?? "unknown";
        break;
      case "active":
        valor = datosDentista.active ?? false;
        break;
      case "birthdate":
        valor = datosDentista.birthdate ?? "unknown"  ;
        break;
      case "address":
        //const address0 = datosDentista.address[0]?.text ?? "Unknown";
        //const address1 = datosDentista.address[1]?.text ?? "Unknown";
        //valor = [address0, address1];
        valor = datosDentista.address ?? "unknown"  ;
        break;
      case "phone":
          valor = datosDentista.phone ?? 0  ;
          break;
      case "mail":
          valor = datosDentista.mail ?? "unknown"  ;
  
    }
    return valor;
  }
  
  function actualizaDentista(id, datos) {
    localStorage.setItem(id, JSON.stringify(datos));
  }
  
  function altaDentista(datos) {
    // Funcion auxiliar para generar un índice de la forma dentistaXX
  
    function nuevoIndiceDentista() {
      const prefijo = "dentista";
      const dentistas = recuperaTodosLosDentistas();
  
      if (dentistas.length == 0) {
        return "dentista01";
      }
  
      const longitudPrefijo = prefijo.length;
  
      let indices = dentistas.map((p) => {
        const sufijo = p.substring(longitudPrefijo, p.length);
        return parseInt(sufijo);
      });
  
      indices = indices.sort();
      const ultimoIndice = indices.length - 1;
      const valorNuevoIndice = indices[ultimoIndice] + 1;
  
      let sufijo = "";
      if (valorNuevoIndice < 10) {
        sufijo = "00" + valorNuevoIndice;
      } else {
        sufijo = "0" + valorNuevoIndice;
      }
  
      return prefijo + sufijo;
    }
  
    // Se genera un nuevo indice y se añade al item (array de dentistas)
    const id = nuevoIndiceDentista();
    let dentistas = recuperaTodosLosDentistas();
    dentistas.push(id);
    localStorage.setItem("dentistas", JSON.stringify(dentistas));
  
    // Se añade un item para el nuevo dentista
    actualizaDentista(id, datos);
  }

