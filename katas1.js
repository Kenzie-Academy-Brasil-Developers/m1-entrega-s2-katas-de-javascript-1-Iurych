//exercicio1
/*
function cubicSquare () {
    let resultado = ''
    for (let i=1 ; i<=10 ; i++) {
    let a = i ** 3
    resultado += `${a}, ` //ageitar a última ,
  
}
return resultado
}
console.log(cubicSquare())
*/

//exercicio2

function divisiblesFor(x , y){
    let divisores = '';
    for (let i = x ; i >= y ; i--) {
        //console.log(i);
        let q =parseInt(i / y);
        //console.log(q);
        divisores += `${q}, `;

    }
return divisores
}
console.log('Divisores: ' + divisiblesFor(100,10))



