// Funcion tradicional
function almuerzo(proteina, verdura){
    return `${proteina} ${verdura}`;
}
console.log(almuerzo("carne", "brocoli"));

// Arrow Function : Funcion con flechas
const almuerzo2 = (proteina,verdura) => {
    return `${proteina} ${verdura}`;
}
console.log(almuerzo2('pollo','tomate'));

// Creamos una expresion de funcion
const greeting = function (name){
    return `Hi, ${name}`;
}
console.log(greeting('Ana'));

//  Arrow function : explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`;
}
console.log(newGreeting('Seidy'));
// Funcion flecha o arrow function : implicit return
const newGreetingImplicit = name=> `Hi, ${name}`;
const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, ${name} ${lastName}`;
console.log(newGreetingImplicit('Osito'));
console.log(newGreetingImplicitWithTwoParameters('Chiqui','Avalos'));

// Lexical Binding 
const finctionalCharacter = {
  name: "Uncle Ben",
  messageWithTradicionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  },
};
finctionalCharacter.messageWithTradicionalFunction('Que tengas un bonito dia tradicional');
finctionalCharacter.messageWithArrowFunction('Que tengas buenas tardes con flechas');