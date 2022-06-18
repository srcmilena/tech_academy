const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    mario.classList.add("jump-mario");

    setTimeout(() => { // executar uma função depois que o tempo passar
        mario.classList.remove("jump-mario");
    }, 500);
}