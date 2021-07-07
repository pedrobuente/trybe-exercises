var numero = 7;

for (var contador = 1; contador <= 9; contador++) {
    console.log(numero * contador);
} 

let listaDeNomes = ["Joana","Maria","Joana"];

for (let index = 0; index < listaDeNomes.length; index += 1) {
    console.log("Bem vindo(a)"+ " " + listaDeNomes[index] + "!");
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let indice = 0; indice < groceryList.length ; indice += 1) {
    let posicao = indice + 1
    console.log("Elemento " + posicao + " da lista: " + groceryList[indice]);
}