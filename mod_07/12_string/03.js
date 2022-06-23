// extraindo dados através do índice
const frase = 'Minha cor favorita é: azul';
const indice = frase.indexOf(':'); // mostra a posição de ':'

const cor = frase.substring(indice+2); // ':' está na posição 1 + 1 (espaço) = índice + 2

console.log(cor);