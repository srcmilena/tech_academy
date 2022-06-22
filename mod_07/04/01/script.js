document.querySelector('#t1').textContent = 'JavaScript - introdução';
document.querySelector('#t2').textContent = 'Exemplificando algumas funcionalidades';

function bemVindo() {
    const nome = document.querySelector('#nomeUsuario').value;
    alert(`Olá ${nome}! Seja bem-vinda!`); // usa-se crase quando vamos usar variáveis como atributo
    document.getElementById('formularioLogin').style.display = 'none'; // cancela o envio do form
}