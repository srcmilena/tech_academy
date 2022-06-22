function mudaCorFundo() {
    const menu = document.querySelector('#coresFundo'); // pega a escolha da tag select no html
    const cor = menu.options[menu.selectedIndex].value; // pega a escolha da const menu
    document.body.style.background = cor; // troca de acordo com a cor
}