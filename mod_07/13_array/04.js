// join = oposto de split
// escolher um caracter onde queremos juntar os elementos de um vetor separado por aquele caracter

const palavrasChave = 'cinema,futebol,televisão,viagem,boliche';
const hobbies = palavrasChave.split(',');
const tiposHobbies = hobbies.join('|'); 
console.log(tiposHobbies);