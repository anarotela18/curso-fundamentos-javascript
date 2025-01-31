/*
Math.floor() redondea un número flotante (decimal) hacia abajo, hacia su entero más proximo. Es decir:

1.4 -> 1
1.6 -> 1
-0.1 -> -1
*/
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

console.log("--- Adivina el número secreto entre el 1 al 10 -----");
const numeroJugador = 10;

console.log("Número secreto: "+numeroSecreto);
console.log("Número Jugador: " + numeroJugador);

if(numeroSecreto === numeroJugador){
    console.log("Adivinaste el número");
}else{
    console.log("Sigue intentando");
}
