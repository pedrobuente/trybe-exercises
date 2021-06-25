let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let index = 0; index < numbers.length; index += 1) {
   let secondIndex = index + 1;
   if (secondIndex < numbers.length -1){
        let numero = numbers[index] * numbers[secondIndex];
   
        array.push(numero);
   }
   else {
       array.push(numbers[index] * 2)
    }
 
}
console.log(array)