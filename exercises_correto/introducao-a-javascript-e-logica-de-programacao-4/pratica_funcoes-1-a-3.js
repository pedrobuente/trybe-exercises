// //exercicio 1
// let palavra = 'arara';
// let palindromo =''
// function verificaPalindromo (palavra){
//     for(let index = palavra.length - 1;index >= 0; index -=1){
//      palindromo += palavra[index]; 
//     }
//     if (palavra === palindromo){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(verificaPalindromo(palavra));

//exercicio 2

let array = [2, 3, 6, 7, 10, 1]
let numero = array[0];
let posicao = 0;


function maiorNumero(){
for (let index = 0 ; index <= array.length - 1; index += 1){
    if (array[index] > numero){
        numero = array[index];
        posicao = index;
    }
}

return posicao ;
}
console.log(maiorNumero(array));
//exercicio 3

let arraytwo = [2, 4, 6, 7, 10, 0, -3];
let numerotwo = arraytwo[0];
let posicaotwo = 0;

function menorNumero(){
    for (let indextwo = 0 ; indextwo <= arraytwo.length - 1; indextwo += 1){
        if (arraytwo[indextwo] < numerotwo){
            numerotwo = arraytwo[indextwo];
            posicaotwo = indextwo;
        }
    }
    
    return posicaotwo ;

}

console.log(menorNumero(arraytwo));