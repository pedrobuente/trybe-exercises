let a = 13;
let b = 9;
let c = 12;
let adicao = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;

console.log(multiplicacao);

//coigo 2
if (a > b) {
    console.log(a);
}
else {
    console.log(b)
}

//codigo 3
if (a > b && a > c){
    console.log(a);
}
else if (b > a && b > c ) {
    console.log(b);
}
else {
    console.log(c);
}
//codigo 4
if (a > 0){
    console.log("positivo");
}
else if (a === 0){
    console.log("zero")
}
else {
    console.log("negativo")
}