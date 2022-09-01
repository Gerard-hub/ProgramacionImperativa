// Desarrollar una función que reciba 2 numeros y retorne la suma de ambos
let suma = (a, b) => a + b

console.log(suma(2, 3))

// Desarrollar una función que reciba 2 numeros y 
//      retorne la suma de ambos, si el primer parametro es mayor, 
//      caso contrario retornar la resta.
let sumaOresta = (a, b) => a > b ? a + b : a - b

console.log(sumaOresta(3, 4))

// Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es mayor o igual a 12, retornar 'Aprobado', 
//      caso contrario retornar 'otra chance '.
let evalua = (a, b, c, d) =>{
    if(a+b+c+d >= 12){
        return "Aprobado"
    }
    else{
        return "otra chance"
    }
}
console.log(evalua(4, 2, 3, 4))

// Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es par, retornar la mitad del total,  
//      caso contrario retornar el doble del total.
let evalua2 = (a,b,c,d) =>{
    if((a+b+c+d)%2===0){
        return (a+b+c+d)/2
    }
    else{
        return (a+b+c+d)*2
    }
}
console.log(evalua2(3,2,2,2));

// Declarar un array de edades por ejemplo -> [10, 9, 8, 22, 55, 80, 5, 63, 29, 9] , luego desarrollar las siguientes funciones:
// Funcion que reciba un array de edades y retorne el promedio
let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9]
let promedio = (arr)=>{
    let suma = 0
    for(let i = 0; i <= arr.length; i++){
        suma = suma + arr[i]
    }
    return (suma/arr.length)
}
console.log(promedio(edades));