/*
Vamos a tener 2 funciones que se van a disparar de forma sincrona y en medio de estas funciones podemos generar una promesa y que al momento en que esta se dispare vamos a tener el resultado de cada una de las funciones.
Pero la promesa va a venir despues porque va a ser lo ultimo en solucionar.
Las promesas es la forma en que nosotros vamos a generar que nuestro codigo pueda funcionar de forma sincrono.
Tienen 3 estados
1- pending: este estado es cuando la promesa se va creando/generando
2- fullfilled: una vez que la promesa se resuelva para bien o para mal, la promesa se va a poner en fullfilled.
3- rejected: que es cuando la promesa no se resolvio.

callbacks de las promesas:
1- resolve
2- reject


metodos de las promesas:
1- then(): cuando la promesa se resuelve y ya esta fullfilled
2- catch(): cuando la promesa no se resuelve y en catch obtenemos el error y podemas imprimirlo.

*/
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let operationSuccessfull = true;
        if (operationSuccessfull) {
            resolve("La operacion fue exitosa");
        } else {
            reject("Fallo la operacion");
        }
    },2000);
});
promise
  .then((sucessMessage) => {
    console.log(sucessMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

