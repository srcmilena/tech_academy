const pessoa = {
    primeiroNome : 'Tatiana',
    ultimoNome : 'Maslany',
    endereco : { // chave composta
        rua : 'Canadá',
        num : 50
    },
    nomeCompleto : function() {
    // não se coloca o nome da função pois estamos declarando nomeCOmpleto como nome da função | do tipo function
    // criando função dentro de um objeto
    // corpo da função
    return this.primeiroNome + ' ' + this.ultimoNome; // pessoa.ultimoNome mas é comum usar o this pois funcionará independente do nome do objeto | o objeto atual
    // this = muito comum ao utilizar com objetos | este.chaveDoObjeto
    // função dentro de um objeto ou atrelado a um objeto = método do objeto
    }
};

//console.log(pessoa.primeiroNome); // acessando a propriedade
//console.log(pessoa.endereco.rua); // acessando objeto
//console.log(typeof pessoa.endereco); // tipo da chave

pessoa.celular = "9912345678";

pessoa.enderecoCompleto = function() { // criando função/método que retorna o endereço completo
    return `Rua: ${this.endereco.rua}, ${this.endereco.num}.`; // ao usar crase, se concatena com cifrão ($)
}
//console.log(pessoa.nomeCompleto); // mostra apenas o objeto função
//console.log(pessoa.nomeCompleto()); // executa a função

//console.log(pessoa);
//console.log(pessoa.enderecoCompleto());

function exibeDadosPessoa(p) { // pode receber qualquer objeto
    // se o objeto é uma pessoa, p vai receber o objeto pessoa
    // p vai assumir qualquer valor de objeto

   // alert(`\n
   console.log(`\n
        Nome: ${p.nomeCompleto()} \n
        Endereço: ${p.celular}
    `) // \n = quebra de linha
        // chamando de p pois quando formos chamar a função, o objeto passará como argumento na chamada e o p é o parâmetro dessa declaração
        // p vai receber os dados do objeto pessoa

};

exibeDadosPessoa(pessoa); // (pessoa) que vai ser atribuído para p