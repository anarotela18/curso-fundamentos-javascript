// How to create an Array
// 1. new Array() o Array()

const fruits = Array('apple','banana','orange');
console.log(fruits);


const justOneNumber = Array(12)
console.log(justOneNumber); // [12]


const number = Array(1,2,3,4,5);
console.log(number); // [1,2,3,4,5]

// 2. Array literal syntax
const oneNumber = [4];
console.log(oneNumber); // 4

// Esto funciona cuando quiero que mi array arranque como vacio
const emptyArray = [];
console.log(emptyArray);

// Un array con muchos strings
const sports = ['soccer','tennis','rugby'];
console.log(sports);

// Un array con varios tipos de datos
const recipeIngredientes = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
];
console.log(recipeIngredientes);



// Accessing array elements
const firstFruit = fruits[0];
console.log("firstFruit:" + firstFruit);


// Length property
const numberOfFruits = fruits.length;
console.log(numberOfFruits);