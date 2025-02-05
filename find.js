const multipleOf5 = [5,10,15,20];

const firstNumberGreaterTan10 = multipleOf5.find(number => number > 10);

console.log('Multipleof5: ', multipleOf5);
console.log('First Number Greater than 10: ',firstNumberGreaterTan10);

// findIndex()
const randomNumber = [6,14,27,56,40];
const indexNumber = randomNumber.findIndex(number=> number > 50);
console.log('RandomNumber: ',randomNumber);
console.log('IndexNumber: ',indexNumber);