// Explicit Type Casting
const string = '42';
const integer = parseInt(string);
//console.log(integer); //42
//console.log(typeof integer); //number

const stringDecimal = '3.14';
const float = parseFloat(stringDecimal);
//console.log(float); // 3.14
//console.log(typeof float); // number

// Convertimos de binario a decimal y la base es 2
const binary = '1010';
const decimal = parseInt(binary,2);
//console.log(decimal); //10
//console.log(typeof decimal); // number

// Implicit Type Casting
const sum = '5' + 3;
//console.log(sum); // 53

const sumWithBoolean = '3' + true;
// console.log(sumWithBoolean); // 3true

const sumWithNumber = 2 + true;
//console.log(sumWithNumber);// 3

/*

Truco: Cómo saber si JavaScript concatena o suma:

Si hay al menos un string, JavaScript concatena.
Si no hay ningún string, JavaScript realiza una suma.

*/
const stringValue = "10";
const numberValue = 10;
const booleanValue = true;
console.log("----- stringValue -------");
console.log(stringValue + stringValue); // 1010 concatena
console.log(stringValue + numberValue); // 1010 concatena
console.log(stringValue + booleanValue );// 10true concatena

console.log("----- numberValue -------");
console.log(numberValue + stringValue); // 1010 concatena
console.log(numberValue + numberValue); // 20 suma
console.log(numberValue + booleanValue); // 11 suma

console.log("----- booleanValue -------");
console.log(booleanValue + stringValue); // true10 concatena
console.log(booleanValue + numberValue); // 11 suma 
console.log(booleanValue + booleanValue); // 2 suma

console.log("----- quiz -------");
const numero = '596';
const numeroConvertido = parseInt(numero);
console.log(typeof numero); // string
console.log(typeof numeroConvertido); // number