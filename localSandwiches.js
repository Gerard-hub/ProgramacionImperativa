

let precioSandwiche = 0

const mostrarPrecioFinal = (tipoSandwiche, tipoPan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) => {


    switch (tipoSandwiche){
        case "pollo": 
            precioSandwiche += 150
            break
        
        case "carne":
            precioSandwiche += 200
            break

        case "vegetariano":
            precioSandwiche += 100
            break

        default:
            console.log("Ingreso un tipo incorrecto")
    }
    switch (tipoPan){
        case "blanco":
            precioSandwiche += 50
            break

        case "negro":
            precioSandwiche += 60
            break

        case "sinGluten":
            precioSandwiche += 75
            break

        default:
            console.log("Ingreso un tipo de pan incorrecto")
    }
    
    queso===true ? precioSandwiche += 20 : precioSandwiche
    tomate===true ? precioSandwiche += 15 : precioSandwiche
    lechuga===true ? precioSandwiche += 10 : precioSandwiche
    cebolla===true ? precioSandwiche += 15 : precioSandwiche
    mayonesa===true ? precioSandwiche += 5 : precioSandwiche
    mostaza===true ? precioSandwiche += 5 : precioSandwiche

    return precioSandwiche
}

console.log(mostrarPrecioFinal("pollo", "negro", true, false, true, false, false, true))
