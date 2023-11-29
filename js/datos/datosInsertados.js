
//Importaciones y exportaciones
export { cargaDatosDentistas };

//Cargo los datos de los dentistas
const dentistas = ["dentista01", "dentista02", "dentista03", "dentista04"];

const dentista01 = {
  name: [{ text: "Alberto"}],
  surname: [{ text: "Garcia"}],
  active: false,
  gender: "male",
  birthdate: "1969-04-23", //yyyy-mm-dd
  address: "Calle Asuncion, 13, 41011, Sevilla, España", 
  phone: "+34654632176",
  mail: "alberto@us.es"
};

const dentista02 = {
  name: [{ text: "Alfonso"}],
  surname: [{ text: "Ibañez"}],
  active: true,
  gender: "male",
  birthdate: "1974-05-18", //yyyy-mm-dd
  address: "Calle Virgen de la Cinta, 3, 41022, Sevilla, España",
  phone: "+34654632176",
  mail: "alfonso@us.es"
};

const dentista03 = {
  name: [{ text: "Rafael"}],
  surname: [{ text: "Prieto"}],
  active: true,
  gender: "male",
  birthdate: "1974-05-18", //yyyy-mm-dd
  address: "Calle Virgen de Lujan, 52, 41010, Sevilla, España",
  phone: "+34758632176",
  mail: "rafael@us.es"

};

const dentista04 = {
  name: [{ text: "Valle" }],
  surname: [{ text: "Alonso de Caso"}],
  active: true,
  gender: "female",
  birthdate: "1974-05-18", //yyyy-mm-dd
  address: "Avenida de la República Argentina, 3, 41011, Sevilla, España",
  phone: "+34654632176",
  mail: "valle@us.es"

};


//Función para cargar los datos de los dentistas
function cargaDatosDentistas() {
    localStorage.clear();
    localStorage.setItem("dentistas", JSON.stringify(dentistas));
    dentistas.forEach((p) => {
      localStorage.setItem(p, JSON.stringify(eval(p)));
    });
  }