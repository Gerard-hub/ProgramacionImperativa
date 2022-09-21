let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const binarySerch = (lista, item) =>{
    let low=0
    let high=lista.length-1
    while(low<=high){
        const mid=Math.floor((low+high)/2)
        const guess=lista[mid]
        if(guess===item){
            return mid
        }
        if(guess>item){
            high=mid-1
        } else{
            low=mid+1
        }

    }
    return null
};
/*¿Cuál es la posición del número 1?*/
let indiceDe1=binarySerch(list,1)
console.log(indiceDe1)

/*¿Cuál es la posición del número 5?*/
let indiceDe5=binarySerch(list,5)
console.log(indiceDe5)

/*¿Cuál es la posición del número 9?*/
let indiceDe9=binarySerch(list,9)
console.log(indiceDe9)

/*¿Cuál es la posición del número 11?*/
let indiceDe11=binarySerch(list,11)
console.log(indiceDe11)

let list2 = [12,3,5,7,1,22,47,100];
const ordenarLista= arr=>{
    let temp
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}
ordenarLista(list2)
console.log(list2)

/*¿Cuál es la posición del número 12?*/
console.log("Está en el índice: "+binarySerch(list2,12))

/*¿Cuál es la posición del número 5?*/
console.log("Está en el índice: "+binarySerch(list2,5))

/*¿Cuál es la posición del número 22?*/
console.log("Está en el índice: "+binarySerch(list2,22))

/*¿Cuál es la posición del número 100?*/
console.log("Está en el índice: "+binarySerch(list2,100))

/*Ejercicio 1
Dado un array con los datos de una encuesta realizada sobre los temas musicales
más populares —lo que se tiene en el array son objetos definidos con el nombre de
un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
cada uno.
Los votos obtenidos están desordenados.
Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
a) Resolverlo aplicando búsqueda lineal.*/

let temasMusicales=[
    {
        nombre: "Amor frances",
        votos: 15
    },
    {
        nombre: "Persiana americana",
        votos: 17
    },
    {
        nombre: "Viejo",
        votos: 13
    },
    {
        nombre: "Help",
        votos: 25
    },
    {
        nombre: "Higthway to hell",
        votos: 22
    }
];
const buscaVotos= (arr, tema)=>{
    let resultado
    for(let i=0;i<arr.length-1;i++){
        if(arr[i].nombre===tema)
            resultado= arr[i].votos
    }
    return resultado
}
console.log(buscaVotos(temasMusicales,"Help"))

/*b) Resolverlo aplicando búsqueda binaria.*/

const ordenaObjetos = arr =>{
    let temp
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j].votos>arr[j+1].votos){
                temp= arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}
ordenaObjetos(temasMusicales)
console.log(temasMusicales)


const buscaVotosBinario = (arr, tema)=>{
    let low=0
    let high=arr.length-1
    while(low<=high){
        const mid = Math.floor((low+high)/2)
        const guess = mid
        if(arr[guess].nombre===tema){
            return arr[mid].votos
        }
        if(guess>arr.indexOf(tema)){
            high= mid-1
        } else{
            low= mid+1
        }
    }
    return null
};

console.log(buscaVotosBinario(temasMusicales,"Help"))