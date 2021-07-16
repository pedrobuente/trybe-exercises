let p1 ='';
let p2 = '';
let l1 = 0;
let l2 = 0;
let diferenca = 0;
let palavra = '';

function verificaFimPalavra(p1,p2){
    for (let letras in p1){
        l1 = letras;
    }
    for (let letras2 in p2){
        l2 = letras2;
    }
    diferenca =  l1 - l2;

    for(let index = diferenca ; index <= l1; index += 1){
        palavra += p1[index];

    }

    if(palavra === p2){
        return true;
    }
    else {
        return false;
    }


}
console.log(verificaFimPalavra('joaofernando','fernando'));
