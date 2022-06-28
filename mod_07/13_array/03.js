// split = dividir

const email = 'fulano@meuemail.com'; // é usado split para dividir essa cadei de caracteres

let emailArray = email.split('@'); // vai dividir quando chegar no '@'. a parte antes e depois do @ vão para índices no 

console.log(emailArray);

// é interessante usar o método split no seguinte caso:
const palavrasChave = 'cinema,futebol,televisão,viagem,boliche'; // e eu queira transformar essa string em array
const hobbies = palavrasChave.split(',');

console.log(hobbies);
console.log(hobbies[0]); // acessando individualmente
console.log(hobbies[hobbies.length-1]);

// transformando um vetor em uma string
const tiposHobbies = hobbies.toString(); // método = ()
console.log(tiposHobbies);