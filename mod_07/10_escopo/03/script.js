function calculaKmMilha() {
    let km = document.querySelector('#valorKm').value; // querySelector = método do JS onde selecionamos um elemento do arquivo HTML que se chama '#(id)valorKm', que, no final, pega o valor digitado pelo usuário
    document.querySelector('#resultado').textContent = km * 1609; // ? o que seria esse conteúdo do texto? e por que alterou?
}

//console.log(km);

/*
* quando declarar uma variável local?
(recomendado) quando precisamos usar apenas dentro do limite da função

* quando declarar uma variável global?
(não recomendado utilizar, apenas quando necessário) quando precisamos utilizar ao longo do arquivo/código

*/ 