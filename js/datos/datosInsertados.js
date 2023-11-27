
//Importaciones y exportaciones
export { cargaDatosDentistas };

//Cargo los datos de los dentistas
const dentistas = ["dentista01", "dentista02"];

const dentista01 = {
  name: [{ text: "José" }],
  active: false,
  gender: "male",
};

const dentista02 = {
  name: [{ text: "María" }],
  active: true,
  gender: "female",
};


//Función para cargar los datos de los dentistas
function cargaDatosDentistas() {
    localStorage.clear();
    localStorage.setItem("dentistas", JSON.stringify(dentistas));
    dentistas.forEach((p) => {
      localStorage.setItem(p, JSON.stringify(eval(p)));
    });
  }