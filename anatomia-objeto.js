/*
Estructura de datos 

key / value

objeto{
    propiedad : valor de la propiedad,
    propiedad : valor de la propiedad
    metodos:
}
*/
const persona = {
    nombre: 'John',
    edad: 30,
    direccion: {
        calle: 'Av. Insu 187',
        ciudad: 'CDMX'
    },
    saludar(){
        console.log(`Hola, mi nombre es: ${persona.nombre}`);
    }
}