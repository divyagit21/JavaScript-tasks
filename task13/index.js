const box = document.querySelector('.box');
const input = document.querySelector('input');

input.addEventListener('input', changeColor);

function changeColor(e) {
    box.style.backgroundColor = e.target.value; 
}
