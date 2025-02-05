/*
Transformando con map
Permite aplicar una funcion a cada elemento de un array y construir un nuevo array con los resultados
*/
// map
const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map(num => num * num);
console.log(numbers);
console.log(squareNumbers);

// forEach
// Itera sobre cada elemento de un array y ejecuta una funcion proporcionada para cada elemento, sin crear un nuevo array.
const colors = ['red','pink','blue'];
const iteratedColors = colors.forEach(color => console.log(color));
// console.log(color);
// console.log(iteratedColors);

// Exercise: Fahrenheit to Celsius conversion
const temperaturesInfahrenheit = [32, 68, 104, 212];
const temperaturesInCelsius = temperaturesInfahrenheit.map(fahrenheit => (5 / 9) * (fahrenheit - 32));
console.log('temperaturesInfahrenheit: ',temperaturesInfahrenheit);
console.log("temperaturesInCelsius: ", temperaturesInCelsius);

// Exercise: Sum of Elements in an Array
const newNumbers = [1,2,3,4,5];
let sum = 0;
newNumbers.forEach(number => {
    sum +=number;
});
console.log('Array of New Numbers: ',newNumbers);
console.log('Sum of New Numbers:', sum);