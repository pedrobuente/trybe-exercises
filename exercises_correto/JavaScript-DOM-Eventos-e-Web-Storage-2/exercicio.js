
let h = document.createElement('h1');
h.innerText = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(h);
h.classList.add('title');

let div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('main-content');

let div2 = document.createElement('div');
let lugar = document.getElementsByClassName('main-content')[0];
lugar.appendChild(div2);
div2.classList.add('center-content');

let p = document.createElement('p');
let lug = document.getElementsByClassName('center-content')[0];
lug.appendChild(p);
p.innerText = "algum texto";

let div3 = document.createElement('div');
lugar.appendChild(div3);
div3.classList.add('left-content');

let div4 = document.createElement('div');
lugar.appendChild(div4);
div4.classList.add('right-content');

let img = document.createElement('img');
let l = document.getElementsByClassName('left-content')[0];
l.appendChild(img);
img.classList.add('small-image');
img.src = 'https://picsum.photos/200';

let div6 = document.createElement('ul');
let lugare = document.getElementsByClassName('right-content')[0];
lugare.appendChild(div6);

let array= ['um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez'];

let lugar2 = document.getElementsByTagName('ul')[0];
for (index = 0 ; index < array.length ; index += 1){
    let item = array[index];
    let li = document.createElement('li');
    li.innerText = item ;
    lugar2.appendChild(li);
    li.className = "new";
}

let h31 = document.createElement('h3');
lugar.appendChild(h31);

let h32 = document.createElement('h3');
lugar.appendChild(h32);

let h33 = document.createElement('h3');
lugar.appendChild(h33);

h3Lug = document.getElementsByTagName('h3');
for (let index2 = 0 ; index2 < h3Lug.length ; index2 += 1){
    h3Lug[index2].classList.add('description');
}

lugar.removeChild(div3);

document.getElementsByClassName('right-content')[0].style.margin = 'auto';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'green';



let elementos = document.querySelectorAll('.new');
for(let i = 0 ; i < elementos.length ; i += 1){
    let elemento = elementos[i];
        if(i > 7){
            lugar2.removeChild(elemento);
        }
}
