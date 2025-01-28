// 1. Tipo Entero y Decimal
const entero = 42;
const decimal = 3.14;
console.log(typeof(entero));// number
console.log(typeof(decimal));// number

// 2. Notación Científica
const cientifico = 5e3;

// 3. Infinitos y NaN
const infinito = Infinity;
const noEsUnNumero = NaN;

// Operaciones aritméticas
// 1. Suma, Resta, Multiplicación y División
const suma = 3 + 4;
const resta = 4 - 4;
const multiplicacion = 4 * 7;
const division =  16 /2 ;

// 2. Módulo y Exponenciación
const modulo = 15 % 8;
const exponenciacion = 2 ** 3;

// Precisión
const resultado = 0.1 + 0.2
console.log(resultado); // 0.30000000000000004
console.log(resultado.toFixed(1)); //0.3
console.log(resultado === 0.3); //false

// Operaciones Avanzadas
const raizCuadrada = Math.sqrt(16); 
console.log(raizCuadrada); // 4
const valorAbsoluto = Math.abs(-7); 
console.log(valorAbsoluto); // 7
const aleatorio = Math.random();
console.log(aleatorio);  // 0.987777










