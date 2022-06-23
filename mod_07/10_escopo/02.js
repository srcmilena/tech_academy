const gravidade = 9.8;

console.log(gravidade); // var global

function calculaVelocQuedaLivre(tempo) {
    const resultado = gravidade * tempo; // var local
    return resultado; // quando adicionamos o return, a execução dessa função é terminada ao fim dessa linha
    //alert('Olá');  // * não vai ser executado
}

console.log(calculaVelocQuedaLivre(30));

const resultado = 0;

console.log(resultado);