const prompt = require("prompt-sync")({ sigint: true });

// Micro desafio 1:  Hace la resta de 40 - 10 = 30

// Micro desafio 2: Retorna 20. Llega al primer return y sale de la función

// function test2(x, y){
//     return x * 2
//     console.log(x)
//     return x / 2
// }

// console.log(test2(10))

// function test1(x, y) {
//     return y - x
// }

// console.log(test1 (10, 40))

// 1)
// function pulgadasACentimetros(pulgadas){
//     return pulgadas * 2.54
// }

// console.log(pulgadasACentimetros(1))

// 2)
// function stringAURL (grupo2){
//     return `http://www.${grupo2}.com`
// }

// console.log(stringAURL("nosotros"))

// 3)
// function stringConAdmiracion (frase) {
//     return `¡${frase}!`
// }

// console.log(stringConAdmiracion("prueba"))

// 4)
// function calcEdadPerros (edad) {
//     return edad * 7
// }

// Arrow Function version
// let calcEdadPerros = (edad) => edad * 7

// console.log(calcEdadPerros(2))

// 5) se considera el requerimiento de q el mes de trabajo tiene 40 horas
// function calcValorHoraSueldo (sueldo) {
//     return sueldo / 40
// }

// console.log(calcValorHoraSueldo(40000))

// 6)
// function calculadorIMC(altura, peso) {
//     return peso / (altura*altura)
// }

let calculadorIMC = (altura, peso) => peso / (altura*altura)

console.log(calculadorIMC(1.8, 100))