const persona = {
    nombre: 'Jhon',
    edad: 30,
    direccion: {
        calle:'Av insurgente 187',
        ciudad: 'CDMX'
    },
    saludar(){
        console.log(`Hola mi nombre es: ${persona.nombre}`);
    }
}
console.log(persona);
console.log(persona.saludar());

persona.telefono ="555-555";
console.log(persona.telefono);

persona.despedir = () =>{
    console.log('Adios');
}

console.log(persona);
persona.despedir();


delete persona.telefono;

delete persona.despedir;

console.log(persona);