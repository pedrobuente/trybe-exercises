function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//EXERCICIO 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function createDays(){
let lugar = document.getElementById('days');


for (let i = 0; i < dezDaysList.length; i += 1) {
  const dias = dezDaysList[i];
  const diaListItem = document.createElement('li');
  diaListItem.innerHTML = dias;
  

  diaListItem.className = "day";
  

  if (dias === 24 | dias === 25 | dias === 31) {
    diaListItem.className += " holiday";
  }


  if (dias === 4 | dias === 11 | dias === 18 | dias === 25) {
    diaListItem.className += " friday";
  }
  lugar.appendChild(diaListItem);

}
}
createDays();

//EXERCICIO 2;

function createBottonHoliday ( nameBotton){
let botao = document.createElement('button');
let lug = document.querySelectorAll('.buttons-container');
let newBottonId = 'btn-holiday';


botao.innerHTML =nameBotton;
botao.id = newBottonId;
lug[0].appendChild(botao);
}
createBottonHoliday('feriado');

//EXERCICIO 3;
const lug3 = document.querySelectorAll('.holiday');

const lug4 = document.getElementById('btn-holiday');

function mudaDeCor() {
  for (let ind = 0; ind < lug3.length; ind += 1) {
    if (lug3[ind].style.background != 'blue') {
      lug3[ind].style.background = 'blue';
    } 
    else {
      lug3[ind].style.background = "rgb(238,238,238)";
    }
    

  }
}

lug4.addEventListener("click", mudaDeCor);

//EXERCICIO 4

function createButtonFriday (NomeBotton){
  const btPai = document.getElementsByClassName('buttons-container');
  const btFriday = document.createElement('button');
  const idBtFriday = "btn-friday";

  btPai[0].appendChild(btFriday);
  btFriday.id = idBtFriday;
  btFriday.innerHTML = NomeBotton;
}

createButtonFriday('Sexta-Feira')




//EXERCICIO 5
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let inx = 0; inx < fridays.length; inx += 1) {
    if (fridays[inx].innerHTML !== newFridayText) {
        fridays[inx].innerHTML = newFridayText;
    } else {
        fridays[inx].innerHTML = fridaysArray[inx];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

//EXERCICIO 6
function mouseOver (){
  const getDias = document.querySelector('#days'); 

getDias.addEventListener('mouseover',function(event){
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '600';
})
  
};
mouseOver();


function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};


dayMouseOut()
//EXERCICIO 7
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto');

//exercicio 8
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

//exercicio 9
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();
//exercicio 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

//bonus
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();

