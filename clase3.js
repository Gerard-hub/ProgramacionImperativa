const prompt = require("prompt-sync")({ sigint: true });

//VARIABLES (let o const) = espacios en memoria o una cajita

let nombre = prompt("ingrese su nombre: ")
let apellido = prompt("ingrese su apellido: ")

console.log(`Hola ${nombre} ${apellido} como estas?`)

// prompt-sync