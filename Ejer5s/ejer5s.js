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

function pulgadasACentimetros(pulgadas){
    return pulgadas * 2.54
}

console.log(pulgadasACentimetros(1))

function stringAURL (grupo2){
    return `http://www.${grupo2}.com`
}

console.log(stringAURL("nosotros"))