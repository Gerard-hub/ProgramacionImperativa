Equipo 2: Patrico Añon, Antonio Castro, Juan Lorca,
 Hernan Giunta, Esteban Erize y Gerard Moutardier

const DiezNumerosSiguientes = (x)=> {
    for(let i=1; i<=10; i++){
        console.log(x+1)
        x++
    }
    
}

DiezNumerosSiguientes(4)

const numerosDeATres = ()=>{
    for(let i=5; i<=20; i+=3){
        console.log(i)
    }
}
numerosDeATres()

const sumatoria = ()=>{
    let x=0
    for (let i=1; i<=100; i++){
        
        x+=i
        
    }
    console.log(x)
}
sumatoria()

const factorial = (x)=>{
    let z = 1
    for(let i=x; i>=1; i--){
        z*=i
    }
    console.log(z)
}
factorial(3)