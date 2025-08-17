function handle() {
    const score = parseInt(Math.random() * 6) + 1;
    const dice = document.querySelector('.roll-score');
    dice.setAttribute('src', './images/roll.gif');
    const id = setInterval(rolling,1000);
    setTimeout(() => {
        clearInterval(id);
        dice.setAttribute('src',`./images/${score}.png`)}
        , 1000);
}
function rolling() {
    const dice = document.querySelector('.roll-score');
    dice.setAttribute('src', './images/roll.gif');
}
const btn = document.querySelector('.btn')
btn.addEventListener('click', handle);