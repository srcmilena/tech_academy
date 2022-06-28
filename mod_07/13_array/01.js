// tipo de dado de referência
// array - arranjo - vetor
// lista de itens ou objetos

//let produtos = []; // vazio

// inserindo string simples numa array
let produtos = ['camiseta', 'calça', 'blusa'];

console.log(produtos.length);

let cidades = ['Rio', 'Curitiba', 'Londrina', 'Salvador'];
console.log(cidades[3]); // vai mostra a posição 3

cidades[1] = 'Caxias'; // sobrescrevendo valores

cidades[2] = 30; // misturando tipos de dados numa array

console.log(typeof cidades); // object, pois é possível usar métodos e propriedades

console.log(cidades[cidades.lenght-2]); // mostra a posição específica
