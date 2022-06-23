/*
* semelhança aos objetos do mundo real
* objetos/elemento possuem características próprias (nome, idade, tamanho...)
* objetos = características próprias ajustadas em um mesmo lugar
* o objeto é uma constante
*/

let titulo = 'Introdução ao JavaScript';
const numPag = 500; // não é possível alterar o valor

const livro = { // é comum utilizar const para criar objetos
    titulo : 'Introdução ao JavaScript', // lista de propriedades separado por virgula
    numPag : 500
}; // conseguimos alterar o valor da propriedade (var) dentro dos objetos (valor chave)

livro.titulo = 'JavaScript - Avançado';

console.log(livro.titulo); // acessando uma variável em particular

//console.log(livro['titulo']); // não muito comum com colchetes

livro.editora = 'Super Press'; // adicionando propriedade a um objeto

console.log(livro);