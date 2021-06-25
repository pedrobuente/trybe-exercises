let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valorInicial = numbers[0];
let menorValor = 0;

for (let index = 1 ; index < numbers.length ; index +=1) {
        if (numbers[index] < valorInicial) {
            menorValor = numbers[index];
            valorInicial = numbers[index];
            }
        else {
            menorValor = valorInicial;
        }   
}

console.log(menorValor);

let index = 1;
let arrays = [];

for (index = 1; index <= 25 ; index += 1){
arrays.push(index);

}
for (index = 0 ; index < arrays.length ; index += 1){
    console.log(arrays[index]/2);
}
// console.log(arrays);