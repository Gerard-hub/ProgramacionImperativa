const prompt = require("prompt-sync")({ sigint: true });

//Pide al usuario una frase y la imprime en consola
// const imprimeFrase = ()=>{
//     let frase = prompt('Escriba una frase: ')
//     console.log(frase)
// } 
// imprimeFrase()


//Pide al usuario un nombre e imprime "Hola 'nombre'!"
// const saluda = ()=>{
//     let nombre = prompt('Ingrese su nombre: ')
//     console.log(`Hola ${nombre}!`)
// }
// saluda()

//Pide al usuario dos numeros y devuelve el resultado de la multiplicacion de ambos
// const sumador = ()=>{
//     let num1 = prompt('Ingrese un número: ')
//     let num2 = prompt('Ingrese otro número: ')
//     console.log(num1*num2)
// }
// sumador()

//Pide año de nacimiento al usuario y devuelve "Tienes X años"
const calculaEdad = ()=>{
    let anioNacimiento = prompt('Ingrese su año de nacimiento: ')
    let fecha = new Date()
    let anio = fecha.getFullYear()
    let edad = anio - anioNacimiento
    console.log(edad) 
}
calculaEdad()

