let n = 11;
let padrao ="";
let nume = 0;
let nume2 = 0;
let nume3 = 0;
if (n > 1){
    for (let num = 1; num <= n ; num += 1){
        if (num === n){
            for (nume3 = num; nume3 > 1 ; nume3 -=1){
                padrao += "*"
            }
            padrao += '*';
        
        console.log(padrao);
        padrao = "";
        }
        
        else if (num % 2 != 0){
            for (nume = num ; nume < n; nume += 2){
                padrao += ' ';
                
            }
            
                padrao += '*';
                if (num > 1){   
                for ( nume2 = num -2 ;nume2 > 0 ; nume2 -= 1){
                    padrao += " ";
                }
                padrao += '*';
                }
            console.log(padrao);
            padrao = "";
        }   
    }
}
    