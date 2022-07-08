// tipo de dado de referência
// array - arranjo - vetor

const cidades = [];

// push - adicionar no final

cidades.push('Rio', 'São Paulo');
console.log(cidades);

cidades.push('Cuiabá', 'Brasília');
console.log(cidades);

// unshift - adicionar no começo

cidades.unshift('Campinas', 'Araras');
console.log(cidades);

// pop - remover o último elemento - retorna elemento removido

let cidadeRemovida = cidades.pop();
cidades.pop(cidadeRemovida); // não precisa dizer qual é a última cidade para remover, pois a função do pop é remover o último
console.log(cidades);

// shift remover o primeiro elemento - retorna elemento removido

cidadeRemovida = cidades.shift();
console.log(cidadeRemovida);
console.log(cidades);

// splice - remove um ou mais items - utilizando um índice
const indice = cidades.indexOf('Rio'); // indexOf mostra o índice de tal elemento
console.log(indice);

cidades.splice(indice, 1); // vai remover o elemento em específico (1) ou, se deixar vazio (removendo o , 1), removerá os elementos adiante do indice

console.log(cidades);


