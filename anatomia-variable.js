/*
Recomendaciones para nombrar una variable:
1- Nombres descriptivos
Lo permitido
*/
let cajaDeAndy = 'Woody';
let urlDelUsuario = 'https://www.google.com';
let idDelUsuario = '123456789';


// 2- Evitar ambiguedades
// Lo No permitido
let CDA;
let c = 'Woody';
let cda = 'Woody';
let pcAndy = 'Woody';
let primerTrasteoDeAny = 'Woody';

/* 
Usamos let para variables que van a cambiar con el tiempo
Usamos const para variables que NO van a cambiar con el tiempo
*/
let contador = contador + 1;
const pi = 3.14;