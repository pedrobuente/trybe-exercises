let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media;
let maiorNumero = 0;
let numerosImpares = 0;



for (let index = 0 ; index < numbers.length ; index +=1){
    // console.log(numbers[index]);
    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }

    if (numbers[index] % 2 != 0) {
        numerosImpares += 1;
    }
}

    if (numerosImpares > 0){
        console.log('O arrays tem ', numerosImpares , 'números ímpares');
    }
    else {
        console.log('nenhum valor ímpar encontrado');
    }

    
console.log('O maior número é: ' , maiorNumero);

for (let index = 0 ; index < numbers.length ; index +=1){
    sum = sum + numbers[index];
    media = sum / numbers.length;
    
}
console.log('A soma dos arrays é igual a: ', sum);
console.log('A média aritmética dos arrays é igual a: ', media);

if ( media > 20) {
    console.log('valor maior que 20');
}
else {
    console.log("valor menor ou igual a 20");
}

