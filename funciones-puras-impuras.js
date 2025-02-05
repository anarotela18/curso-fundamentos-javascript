// Funciones impuras
// Side effects
// 1. Modificar variables globales
// 2. Modificar parametros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulacion del DOM
// 6. Obtener la hora actual

// Funcion pura
function sum(a,b){
    return a + b;
}
// Funcion impura
function sum(a,b){
    console.log('A: ',a);
    return a + b;
}
// Funcion impura
let total = 0;
function sumWithSideEffect(){
    total +=a;
    return total;
}

// Funcion pura
function square(x){
    return x * x;
}
// Funcion pura
function addTen(y){
    return y + 10;
}
// Funcion pura
const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);