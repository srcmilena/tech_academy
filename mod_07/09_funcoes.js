function exibirMensagem(primeiroNome, ultimoNome) { // sugestão: nome da função sempre sugestiva. ou seja, entender a funcionalidade dela ao ler
    // var (nome) = parâmetro
    // quando há apenas "()", isso significa que não demos nenhum valor / passamos nenhum parâmetro
    // a variável que colocarmos dentro do parâmetro, conseguimos usar dentro do corpo da função (nome)

    // código dentro da função / corpo da função
    //alert(`Olá ${primeiroNome} ${ultimoNome}! essa mensagem foi emitidade a partir de uma função`); // js não exige ";" ao final, mas é bom usar para evitar conflito
}

// para que a função funcione, precisamos fazer a chamada. ou seja, invocação. para isso, usamos apenas o nome e "()"

exibirMensagem('Tatiana', 'Maslany'); // invocação da função
// valor dentro do "()" = argumento; nesse caso tem que passar 2 valores (se são 2 variáveis)

// parâmetro declara
// argumento atribui

function mediaAritmeticaSimples(a, b) {
    let m = (a + b)/2; // ao declarar uma variável dentro do bloco, ela fica restrita ao uso dentro da função e por isso usamos o return
    return m;
    // usamos o return quando queremos que uma variável declarada dentro de uma função seja exibida fora do bloco

    // ? se eu não usasse o "return", não seria possível exibir no console.log?
}

// mediaAritmeticaSimples(10, 5); // não vai aparecer o resultado aqui pois não estamos pedindo para que apareça e sim apenas chamamos a função

/*let resultado = mediaAritmeticaSimples(10, 5);
console.log(resultado);

let resultado = mediaAritmeticaSimples(15, 20);
console.log(resultado);
// podemos sobescrever valores */

console.log(mediaAritmeticaSimples(10,5)); // a variável, nesse caso, vai aparecer aqui, que é onde a função está sendo chamada e + pedido de mostrar o resultado