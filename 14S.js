const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const edad = arr =>{
    let menores = []
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]<18){
            menores.push(arr[i])
        }
    }
    return menores
}

console.log(edad(edades))

const edadMayorIgual = arr =>{
    let mayorIgual = []
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=18){
            mayorIgual.push(arr[i])
        }
    }
    return mayorIgual
}

console.log(edadMayorIgual(edades))

const edadIgual = arr =>{
    let igual = []
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]===18){
            igual.push(arr[i])
        }
    }
    return igual
}

console.log(edadIgual(edades))

const menor = arr =>{
    let masChico = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] < masChico){
            masChico = arr[i]
        }
    }
    return masChico
}
console.log(menor(edades))

const mayor = arr =>{
    let masGrande = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > masGrande){
            masGrande = arr[i]
        }
    }
    return masGrande
}
console.log(mayor(edades))

const promedio = arr =>{
    let suma = 0
    for(let i=0; i<arr.length; i++){
        suma += arr[i]
    }
    return suma/arr.length
}
console.log(promedio(edades))

const sumaUno = arr =>{
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] + 1
    }
} 
sumaUno(edades)
console.log(edades);

//Ejer 2
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: 1616.52,
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: 1408.68,
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

  const cuentasMenoresTreinta = arr =>{
    let arrMenoresTreinta = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].edadTitular < 30){
            arrMenoresTreinta.push(arr[i])
        }
    }
    return arrMenoresTreinta
  }
  console.log(cuentasMenoresTreinta(arrayCuentas))

  const cuentasMayorIgualTreinta = arr =>{
    let arrMayorIgualTreinta = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].edadTitular >= 30){
            arrMayorIgualTreinta.push(arr[i])
        }
    }
    return arrMayorIgualTreinta
  }
  console.log(cuentasMayorIgualTreinta(arrayCuentas))

  const cuentasMenorIgualTreinta = arr =>{
    let arrMenorIgualTreinta = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].edadTitular <= 30){
            arrMenorIgualTreinta.push(arr[i])
        }
    }
    return arrMenorIgualTreinta
  }
  console.log(cuentasMenorIgualTreinta(arrayCuentas))

  const ctaTitularMasJoven = arr =>{
    let menorEdad = arr[0].edadTitular
    let masJoven = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i].edadTitular < menorEdad)
            masJoven = arr[i]
    }
    return masJoven
  }
  console.log(ctaTitularMasJoven(arrayCuentas))

  const ctasHabilitadas = arr =>{
    let habilitadas = []
    for(let i=0; i<arr.length; i++){
        if(arr[i].estaHabilitada)
            habilitadas.push(arr[i])
    }
    return habilitadas
  }
  console.log(ctasHabilitadas(arrayCuentas))

  const ctasDeshabilitadas = arr =>{
    let deshabilitadas = []
    for(let i=0; i<arr.length; i++){
        if(!arr[i].estaHabilitada)
            deshabilitadas.push(arr[i])
    }
    return deshabilitadas
  }
  console.log(ctasDeshabilitadas(arrayCuentas))

  const ctaMenorSaldo = arr =>{
    let menorSaldo = arr[0].saldo
    let ctaConMenorSaldo = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i].saldo < menorSaldo){
            menorSaldo = arr[i].saldo
            ctaConMenorSaldo = arr[i]
        }
    }
    return ctaConMenorSaldo
  }
  console.log(ctaMenorSaldo(arrayCuentas))

  const ctaMayorSaldo = arr =>{
    let mayorSaldo = arr[0].saldo
    let ctaMayorSaldo = arr[0]
    for(let i = 0; i<arr.length; i++){
        if(arr[i].saldo > mayorSaldo){
            mayorSaldo = arr[i].saldo
            ctaMayorSaldo = arr[i]
        }
    }
    return ctaMayorSaldo
  }
  console.log(ctaMayorSaldo(arrayCuentas))