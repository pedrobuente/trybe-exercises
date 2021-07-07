let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info['recorrente'] ='sim';  
//exercicio 1
console.log('Bem-vinda' , info.personagem);
//exercio 2
console.log(info);
//exercio 3
for (let index in info) {
    console.log(index);
}
//exercicio 4
for (let key in info){
    console.log(info[key]);
}
//exercicio 5
let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

  for( let key in info,infoTwo){
      if (info[key] === 'sim' && infoTwo[key] === 'sim'){
          console.log('Ambos Recorrentes');
      }
      else{
      console.log(info[key] ,'e' , infoTwo[key]);
      }
  }
