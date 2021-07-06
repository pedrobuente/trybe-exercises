let n = 5;
let padrao ="";
let nume = 0;
let nume2 = 0;
if (n > 1){
    for (let num = 1; num <= n ; num += 1){
        if (num % 2 != 0){
        for (nume = num ; nume < n; nume += 2){
            padrao += ' ';
            
        }
        for(nume2 = num ; nume2 > 0; nume2 -= 1){
            padrao += '*';
        }
        
        console.log(padrao);
        padrao = "";
        }   
    }
}
    