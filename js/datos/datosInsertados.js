
//Importaciones y exportaciones
export { cargaDatosDentistas };

//Cargo los datos de los dentistas
const dentistas = ["dentista01", "dentista02", "dentista03", "dentista04"];

const dentista01 = {
  name: [{ text: "Alberto" }],
  active: false,
  gender: "male",
  birthdate: "1969-04-23",
  address: "",
  phone: "",
  mail: ""
};

const dentista02 = {
  name: [{ text: "Alfonso" }],
  active: true,
  gender: "male",
  birthdate: "1974-05-18",
  address: "",
  phone: "",
  mail: ""
};

const dentista03 = {
  name: [{ text: "Rafael" }],
  active: true,
  gender: "male",
  birthdate: "1974-05-18",
  address: "",
  phone: "",
  mail: ""

};

const dentista04 = {
  name: [{ text: "Valle" }],
  active: true,
  gender: "female",
  birthdate: "1974-05-18",
  address: "",
  phone: "",
  mail: ""

};


//Función para cargar los datos de los dentistas
function cargaDatosDentistas() {
    localStorage.clear();
    localStorage.setItem("dentistas", JSON.stringify(dentistas));
    dentistas.forEach((p) => {
      localStorage.setItem(p, JSON.stringify(eval(p)));
    });
  }