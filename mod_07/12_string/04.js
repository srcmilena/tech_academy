// método replace

let texto = 'basquete';
let novoTexto = texto.replace('bas', 'ra'); // replace/substituir = ('o que quero substituir' (bas), 'o que quero colocar' (ra));

//texto = texto.replace('bas', 'ra'); // caso quisesse fazer a alteração na var texto

// vai substituir bas por ra

console.log(novoTexto);
console.log(texto); // mesmo resultado pois a alteração foi para outra variável

// substituindo várias ocorrências dentro de uma frase
let frase = ' A festa ocorrerá no primeiro dia do mês';
let novaFrase = frase.replaceAll('primeiro', 'segunda'); // todas as ocorrências que aparece primeiro, será substituído por segunda

console.log(novaFrase);