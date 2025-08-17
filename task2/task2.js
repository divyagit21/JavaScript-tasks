const inputs = document.querySelectorAll('input')
const colors = ['#ff0000', '#0000ff'];
let directionAngle = 0;

function handle_input_color(e) {
    if (e.target.name === 'color1') {
        colors[0] = e.target.value;
    }
    if (e.target.name === 'color2') {
        colors[1] = e.target.value;
    }
}
function set_color(e) {
    console.log(e.target)
    const selected = e.target;
    const gradient = colors.join(',');
    if (selected) {
        document.body.style.background = `linear-gradient(${directionAngle}deg,${gradient})`;
        const content = document.body.querySelector('.content');
        content.value = `linear-gradient(${directionAngle}deg,${gradient})`
    }
}

function setDirectionAngle(direction) {
    switch (direction) {
        case 'up':
            directionAngle = 0;
            break;
        case 'right':
            directionAngle = 90; 
            break;
        case 'down':
            directionAngle = 180;
            break;
        case 'left':
            directionAngle = 270; 
            break;
        case 'up-right':
            directionAngle = 45;
            break;
        case 'down-right':
            directionAngle = 135; 
            break;
        case 'down-left':
            directionAngle = 225; 
            break;
        case 'up-left':
            directionAngle = 315; 
            break;
        default:
            directionAngle = 0; 
    }
}

const directions = document.querySelectorAll('.direction')
directions.forEach((direction)=>{
    direction.addEventListener('click',handle_direction);
})

function handle_direction(e){
    const crt=e.target.classList[1];
    if(crt){
        setDirectionAngle(crt);
        set_color(e);
    }
}

inputs.forEach((input) => {
    document.addEventListener('click', handle_input_color)
})

const copy = document.querySelector('#copyButton');
copy.addEventListener('click', copied);

function copied() {
    const content = document.querySelector('.content');
    if (content) {
        navigator.clipboard.writeText(content.value)
    }
}