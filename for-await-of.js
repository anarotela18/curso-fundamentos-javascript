/*
Usamos for await of cuando tenemos que hacer mas de una peticion.
Que es un bucle que va a utilizar un async and await para pasar esas peticiones, que pueden ser en arrays.
Y son asincrona de manera a que cuando se permiten de resolver vuelvan al callstack.
Y se tenga respuesta de estos datos.
*/
async function fetchData() {
  try {
    let response = await fetch("https://rickandmortyapi.com/api/character");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];
async function fetchNewData(){
    try {
      for await (let url of urls) {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
}