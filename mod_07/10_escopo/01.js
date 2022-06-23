// escopo em programação = limites de uma função ou do arquivo/código inteiro

let x = 10; // exibida em todo arquivo
// variável global = pode ser acessada em qualquer lugar do arquivo
console.log(x);

// criando função fora de um objeto
function soma(a, b) { // escopo de uma função = determinada dentro das chaves
    console.log(x); // ? só funciona aqui, por quê?
    let z = a + b; // variável local = só funciona dentro desse limite (dentro da função)
    return z;
    //console.log(x); // ! se colocar aqui, não funciona e só mostra no console quando a função for chamada
}
 
let a = 50;
console.log(a);
console.log(soma(4, 23));