/*
//exercicio1
function cubicSquare () {
    let resultado = ''
    for (let i=1 ; i<=10 ; i++) {
    let a = i ** 3
    resultado += `${a} ` //ageitar a última ,
  
}
return resultado
}
console.log("exercicio 1")
console.log("retorna", cubicSquare())



//exercicio2
function divisiblesFor(x, y){
    let Divisores = ''
    for (let i = 1 ; i <= x ; i++) {
        if (i % y == 0) {
            let Q = i 
            Divisores += `${Q} `

        }
    }return Divisores

}
console.log("exercicio 2")
console.log("Retorna", divisiblesFor(20 , 2))//verificar o undefined no final



//exercício3
function stringElement(string, n){
    
    //começar do index 0 e percorrer até o últimp 
    for (let i = 0 ; i <= string.length ; i++ ) {
        if (i == n){
            return string[i].toUpperCase()
            console.log(`Retorna ${string[i].toUpperCase()} pois essa é a letra da posição ${n}`)

        }


    }

}
console.log("exerciocio 3")
let resultado = stringElement("iury", 0)
console.log(`Retorna ${resultado} pois esta é a letra da posição 7.`)
//console.log(stringElement("iury", 3))//verificar o undefined


//exercicio4
function stringSlicer(string, n) {
    for(let i = 0 ; i <= string.length ; i++) {
         
        if (n) {
            return string.slice(0, n) // porque se coloco console.log da undefined?

        }
     }

}
console.log("exercicio 4")
let resultado4 = stringSlicer("almoxarifado", 4)
console.log(`Retorna ${resultado4.toUpperCase()} pois são os 4 primeiros caracteres da string.`)


//exercicio5
function  stringRest(string, n) { 
    for (let i = 0; i<= string.length; i++) {
        if (n) {
            return string.slice(2, string.length) 

        }
    }
}
console.log("exercicio 5")
let resultado5 = stringRest("ALGORÍTIMO", 2)
console.log(`Retorna ${resultado5} pois são os caracteres à partir da posição 2`)


//exercicio6
function countVowels(string){
    let vogais = 0
    for(let i = 0; i < string.length; i++){
        
        if(string[i] == "a"){
            vogais++
        }else if(string[i] == "e"){
            vogais++
        }else if(string[i] == "i"){
            vogais++
        }else if(string[i] == "o"){
            vogais++
        }else if(string[i] == "u"){
            vogais++
        }
    }   
    return vogais
}
console.log("exercicio 6")
let resultado6 = countVowels("abacaxi")
console.log(`Retorna ${resultado6}, pois existem ${resultado6} vogais na palavra abacaxi`)
*/
