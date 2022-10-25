
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
            
            
        }

        
    }
    
}
console.log("exerciocio 3")
console.log(stringElement("algoritmo", 7))



//exercicio4
function stringSlicer(string, n) {
    for(let i = 0 ; i <= string.length ; i++) {
        return string.slice(0, n).toUpperCase()
    }  
}           

console.log("exercicio 4")
console.log(stringSlicer("almoxarifado", 4))


//exercicio5
function  stringRest(string, n) { 
    for (let i = 0; i<= string.length; i++) {        
        return string.slice(n, string.length) 
    
    }
}
console.log("exercicio 5")
console.log(stringRest("ALGORÍTIMO", 2))


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
    return `Retorna ${vogais}, pois existem ${vogais} vogais na palavra abacaxi`
}
console.log("exercicio 6")
console.log(countVowels("abacaxi"))


//exercicio7
function countTextOccurrences(string, letra){
    let count = 0
    for(let i = 0; i < string.length; i++) {
        if(string[i] == letra){
            count++
        }else if(string[i] == letra.toUpperCase()){
            count++
        }

    }
    return `Retorna ${count} , pois a letra "${letra}" apareceu ${count} vezes.`
}
console.log("exercicio 7")
console.log(countTextOccurrences("Abacaxi", "a"))



//exercicio8
function textBackwards(string) {
    let inverso = ''
    for (let i = string.length-1 ; i >= 0 ; i--) {
        inverso += `${string[i]}`
       
    }
return `Retorna ${inverso}, pois é o contrário de abacaxi.`
}
console.log("exercicio 8")
console.log(textBackwards("abacaxi")) 


//exercicio9

function removeBlank(string){
    let NewString = ''
    for(let i = 0; i < string.length; i++){
        if(string[i] !== " "){
            NewString += string[i]
          
        }
    }  
    return NewString
}
console.log("exercicio 9")
console.log(removeBlank("Não ficarão   espaços em branco"))


//exercicio10

function encryptText(string){
    let encripto = ''

    for(let i = 0; i<string.length; i++){
        if (string[i] == "A"){
            encripto += "X"
        }else if(string[i] == "a"){
            encripto += "x"
        }else if(string[i] == "E"){
            encripto += "Y"
        }else if(string[i] == "e"){        
            encripto += "y"        
        }else if (string[i] == "I"){
            encripto += "W"
        }else if(string[i] == "i"){
            encripto += "w"
        }else if(string[i] == "O"){
            encripto += "K"
        }else if(string[i] == "o"){
            encripto += "k"
        }else if(string[i] == "U"){
            encripto += "Z"
        }else if(string[i] == "u"){
            encripto += "z"
        }else{encripto += string[i]}         
    
    }return encripto  
    
}
console.log("exercicio 10")
console.log(encryptText("Uma frase ultra secreta que precisa ser criptografada"))
