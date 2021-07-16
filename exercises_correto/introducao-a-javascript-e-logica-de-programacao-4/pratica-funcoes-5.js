let array = [2, 3, 2, 5, 8, 2, 3, 3, 3];
let repete = 0;
let numero = 0;
let repeteTwo = 0;
let maiorRepeticao;

function repeticao(){
    for( let n of array){
        numero = n;
            for (let nu of array){
                if (nu === n){
                    repete += 1;
                }
        }

        if (repete > repeteTwo){
            maiorRepeticao = n;
            repeteTwo = repete;
        }
        repete = 0;

}

return maiorRepeticao;
}

console.log(repeticao());