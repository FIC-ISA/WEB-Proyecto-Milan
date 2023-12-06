
//Importaciones y exportaciones
export { cargaDatosDentistas };

//Cargo los datos de los dentistas
const dentistas = ["dentista01", "dentista02", "dentista03", "dentista04"];

const dentista01 = {
  name: [{ text: "Alberto"}],
  surname: [{ text: "Garcia"}],
  dni: "77867091Q",
  active: true,
  cuantity: 52,             //cantidad de consultas realizadas
  gender: "male",
  birthdate: "1969-04-23", //yyyy-mm-dd
  //age
  consulta: "presencial",   //radioButton
  address: "Calle Asuncion, 13, 41011, Sevilla, España", 
  phone: "+34654632176",
  mail: "alberto@us.es"
};

const dentista02 = {
  name: [{ text: "Alfonso"}],
  surname: [{text: "Ibañez"}],
  dni: "77867091Q",
  active: true,
  cuantity: 24,             //cantidad de consultas realizadas
  gender: "male",
  birthdate: "1974-05-18", //yyyy-mm-dd
  //age
  consulta: "",   //radioButton
  address: "Calle Virgen de la Cinta, 3, 41022, Sevilla, España",
  phone: "+34654632176",
  mail: "alfonso@us.es"
};

const dentista03 = {
  name: [{ text: "Rafael"}],
  surname: [{ text: "Prieto"}],
  dni: "77867091Q",
  active: true,
  cuantity: 15,             //cantidad de consultas realizadas
  gender: "male",
  birthdate: "1974-05-18", //yyyy-mm-dd
  //age
  consulta: "virtual",   //radioButton
  address: "Calle Virgen de Lujan, 52, 41010, Sevilla, España",
  phone: "+34758632176",
  mail: "rafael@us.es"

};

const dentista04 = {
  name: [{ text: "Valle" }],
  surname: [{ text: "Alonso de Caso"}],
  dni: "77867091Q",   
  active: true,
  cuantity: 37,             //cantidad de consultas realizadas
  gender: "female",
  birthdate: "1974-05-18",  //yyyy-mm-dd
  //age
  consulta: "presencial",   //radioButton
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