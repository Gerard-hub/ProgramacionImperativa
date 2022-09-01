const prompt = require("prompt-sync")({ sigint: true });

//let numero1 = prompt ("Ingrese el numero a sumar ")
//console.log(`El numero es ${numero1}`)
//let numero2 = prompt ("Ingrese otro numero a sumar ")
//console.log(`El numero es ${numero2}`)

 const sumar = (a, b) => a + b

// console.log(sumar(numero1, numero2))

 const restar = (a, b) => a - b

// console.log(restar(6, 3))

const multiplicar = (a, b) => a * b

// console.log(multiplicar(4, 2))

const dividir = (a, b) => a / b

// console.log(dividir(9, 3))

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

let numero1 = prompt ("Ingrese un numero: ")
let numero2 = prompt ("Ingrese otro numero: ")

// let resultadoSuma = sumar (+numero1, +numero2)
// let resultadoResta = restar (numero1, numero2)

// console.log(`La suma de los numero ingresados es: ${resultadoSuma}`)
// console.log(`La resta de los numero ingresado es: ${resultadoResta}`)

// let resultadoMultiplicacion = multiplicar (numero1, numero2)

// console.log(`La multiplicacion de ambos numeros da: ${resultadoMultiplicacion}`)

// let resultadoDivision = dividir (numero1, numero2)

// console.log(resultadoDivision)

// al probar dividendo o divisor en 0, no devuelve resultado, tampoco error

// Nivel III - Funciones extras
// const cuadradoDeUnNumero = a => multiplicar(a, a)
// let cuadrado = cuadradoDeUnNumero(numero1)
// console.log(cuadrado)

// let numero3 = prompt ("Ingrese un tercer numero: ")
// const promedioDeTresNumeros = (a, b, c) => dividir(sumar(sumar(+a, +b), +c), 3)
// let promedio = promedioDeTresNumeros(numero1, numero2, numero3)
// console.log(promedio)

//Ingresar como primer numero el total y como segundo numero el porcentaje a calcular
// const calcularPorcentaje = (a, b) => dividir(multiplicar(a, b), 100)
// let valorPorcentaje = calcularPorcentaje(numero1, numero2)
// console.log(valorPorcentaje)

//Calcula porcentaje del primer numero en base al segundo
const generadorDePorcentaje = (a, b) => dividir(multiplicar(a, 100), b)
let porcentaje = generadorDePorcentaje(numero1, numero2)
console.log(porcentaje)

console.log("Ardilla" || "Perro")