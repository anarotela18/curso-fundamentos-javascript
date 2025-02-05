const animals = ['ant','bison','camel','duck','elephant'];
// Obtengo desde el camello hasta el elefante.
console.log(animals.slice(2)); // camel, duck, elephant


// Obtengo desde el camello hasta el pato (por eso es -1)
console.log(animals.slice(2,4)); // camel,duck

console.log(animals.slice(1, 6)); // bison,camel,duck,elephant

console.log(animals.slice(-2)); // duck, elepahnt

console.log(animals.slice(2,-1));// hasta el final -1: camel,duck

console.log(animals.slice());