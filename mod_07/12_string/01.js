// string = cadeia de caractéres ou apenas um caracter

let nome = 'Miley';
// aspas simples ou duplas

let idade = 27;

// podemos concatenar com outros valores

let conc = nome + ' ,' + idade + ' anos.';

// template string = usar a crase para fazer concatenação ao invés de usar o sinal "+"
// ? quando usar a concatenação com o "+"?
conc = `${nome}, ${idade} anos`;

console.log(conc);

// as strings também são consideradas objetos dentro do js (possuem propriedades e métodos)

console.log(nome.length);
console.log(nome.toUpperCase()); // toUpperCase = propriedade ou chave + (e) função associado a um objeto sempre usa abertura e fechamento de () (método)
console.log(nome.toLowerCase());

let localizacao = 'California - USA';
//let estado = localizacao.substring(13, 16); // pega apenas parte de uma  | 13 - 15 = posição de ínicio e fim de USA

//let estado = localizacao.substring(13); // como está no final da string, poderia posicionar apenas a primeira posição desejada pois ele vai até o fim

console.log(localizacao.length);
let estado = localizacao.substring(localizacao.length-3); // extraindo com a propriedade length

// a contagem de caracteres ocorre do mesmo jeito que em uma contagem de arrays, que começa em zero
// array sempre começa em 0

console.log(estado);