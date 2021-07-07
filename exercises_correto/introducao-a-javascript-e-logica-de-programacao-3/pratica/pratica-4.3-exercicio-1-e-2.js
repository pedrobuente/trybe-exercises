//imprimindo um quadrado de asteriscos
let n = 5;
let padrao ="";

if (n > 1){
    for (let num = 1; num <= n ; num += 1){
     padrao += "*";

    }
    for(num = 1; num <= n ; num += 1){
    console.log(padrao);
    }
}
//outra forma de imprimir um triangulo
let n = 5;
let padrao ="";
let nume = 0;
let nume2 = 0;
if (n > 1){
    for (let num = 1; num <= n ; num += 1){
       for (nume = num ; nume > 0; nume -= 1){
           padrao += '*';
           
       }
       
       console.log(padrao);
       padrao = "";
    }
    }
    
    
//imprimindo um triangulo
if (n > 1) {
    for (let num = 1; num <= n ; num += 1){
        padrao += "*";
        console.log(padrao);
       }
    
}