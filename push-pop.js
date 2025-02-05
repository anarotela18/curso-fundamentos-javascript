// Methods that modify the original array (Mutability)
// Ampliando arrays con push
// Agrega y te devuelve cuantos valores tiene el array
const countries = ['USA','Canada','UK'];
const newCountries = countries.push('Germany','Australia')
console.log(countries);
console.log(newCountries);//5


// pop() remueve un elemento del array
const removedCountry = countries.pop();
console.log(removedCountry);

