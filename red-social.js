const userDataBase = [
  {
    username: "Estefany",
    timeLine: "123",
  },
  {
    username: "Andres",
    password: "123",
  },
  {
    username: "Oscar",
    password: "123",
  },
  {
    username: "Mariana",
    password: "123",
  },
];
const userTimeLine = [
  {
    username: "Estefany",
    timeLine: "Me encanta JavaScript",
  },
  {
    username: "Oscar",
    timeLine: "Debeloper es lo mejor!",
  },
  {
    username: "Mariana",
    timeLine: "A mi me gusta mas el cáfe que el té",
  },
  {
    username: "Andres",
    timeLine: "Ya no quiero trabajar",
  },
];

const username = prompt("Cual es tu usuario?");
const password = prompt("Cual es tu contrasena?");

function usuarioExistente(username,password){
    for(let i=0; i< userDataBase.length; i++){
        if(userDataBase[i].username === username &&
           userDataBase[i].password === password
        ){
            return true;
        }
    }
    return false;
}

function signIn(username,password){
    if(usuarioExistente(username,password)){
        alert(`Bienvenido a tu cuenta ${username}`);
        console.log(userTimeLine);
    }else{
        alert('No existe usuario');
    }
}
signIn(username,password){

}