const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const tech = document.getElementsByClassName('tech');

function mudaTech (){
    tech[0].innerText = input.value;
}

input.addEventListener('change',mudaTech);

function mudaMySpotrybefy(){
    //redireciona para esse link
    window.location.replace('https://www.youtube.com/watch?v=xIQY9u36h84');
    
}
myWebpage.addEventListener('dblclick',mudaMySpotrybefy);

function mudacor(){
    myWebpage.style.color = "blue";
}

myWebpage.addEventListener('mouseover',mudacor)


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.