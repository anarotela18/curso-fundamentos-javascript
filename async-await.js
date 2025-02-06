/*
Async and await
*/
/* Ejemplo de promesa
function fetchData(){
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

Ejemplo de async and await
Cuando queremos que nuestras funciones se conviertan en promesas agregamos al inicio async
await indica que esperamos que ocurra algo se resuelva o no en nuestra promesa
*/
async function fetchData(params) {
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character");
        let data     = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}