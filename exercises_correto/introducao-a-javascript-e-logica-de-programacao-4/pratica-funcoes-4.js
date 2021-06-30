//exercicio 4
let primeiroValor = 0;
let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function quantidadeLetras (){

    primeiroValor = array[0].length;
    for(let index = 0; index <= array.length -1 ; index +=1){
       
        if (array[index].length > primeiroValor){
            maiorValor = array[index];
            primeiroValor = array[index].length;
        }
    }
    return maiorValor;
}

console.log(quantidadeLetras());
