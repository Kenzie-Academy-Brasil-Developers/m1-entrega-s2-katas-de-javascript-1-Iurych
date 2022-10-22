//exercicio1

function cubicSquare () {
    let resultado = ''
    for (let i=1 ; i<=10 ; i++) {
    let a = i ** 3
    resultado += `${a} ` //ageitar a última ,
  
}
return resultado
}
console.log("exercicio1")
console.log(cubicSquare())

/*
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
console.log("exercicio2")
console.log(divisiblesFor(20 , 2))//verificar o undefined no final
*/

/*
//exercício3
//1. String, a palavra a ser utilizada
//2. Number, a posição a ser procurada

function stringElement(x, y){
    let q = []
    for (let i = 1 ; i < x.length ; i++ ) {
        console.log(i)
        if (i % y == 0) {
            q.push( i / y) 
        }

    }
    return q.join('/')
}
console.log("exercicio3")
console.log (stringElement("iury", 3 ))
*/
