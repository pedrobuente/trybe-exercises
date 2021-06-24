//exercicio 10
let custoProduto = 1500;
let imposto = 0.2 * custoProduto;
let valorCustoTotal=custoProduto + imposto;
let valorVenda = 2350 ;
let lucro = valorVenda - valorCustoTotal;
let lucroMil = lucro * 1000;

if (custoProduto < 0 || valorVenda < 0) {
    console.log("erro");
}
else {
    console.log(lucroMil);
}
//exercicio 11
let aliquotaInss = 0;
let salarioBruto = 6000;
let salarioBase = 0;
let aliquotaIR = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94){
    aliquotaInss = aliquotaInss + 0.08;
    salarioBase = salarioBase + salarioBruto - salarioBruto*aliquotaInss;
}
else if (salarioBruto > 1556.95 && salarioBruto <= 2594.92){
    aliquotaInss = aliquotaInss + 0.09;
    salarioBase = salarioBase + salarioBruto - salarioBruto*aliquotaInss;
}
else if (salarioBruto > 2594.93 && salarioBruto <= 5189.92){
    aliquotaInss = aliquotaInss + 0.11;
    salarioBase = salarioBase + salarioBruto - salarioBruto*aliquotaInss;
}
else {
    salarioBase = salarioBase + salarioBruto - 570.88 ; 
}

console.log(salarioBase);

if(salarioBase <= 1903.98){
    console.log("isento de imposto de renda");
}
else if ( salarioBase > 1903.99 && salarioBase <= 2826.65){
    aliquotaIR = aliquotaIR + 0.075;
    salarioLiquido = salarioLiquido  + salarioBase - salarioBase*aliquotaIR + 142.80;
}
else if ( salarioBase > 2826.66 && salarioBase <= 3751.05){
    aliquotaIR = aliquotaIR + 0.15;
    salarioLiquido = salarioLiquido  + salarioBase - salarioBase*aliquotaIR + 354.80;
}
else if ( salarioBase > 3751.06 && salarioBase <= 4664.68){
    aliquotaIR = aliquotaIR + 0.225;
    salarioLiquido = salarioLiquido  + salarioBase - salarioBase*aliquotaIR + 636.13;
}
else {
    aliquotaIR = aliquotaIR + 0.275;
    salarioLiquido = salarioLiquido  + salarioBase - salarioBase*aliquotaIR + 869.36;
}

console.log(salarioLiquido);