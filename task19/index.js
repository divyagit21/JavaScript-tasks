const colorsList = [
    "#FF5733",
    "#3498db",
    "#2ecc71",
    "#FF6347",
    "#1E90FF",
    "#32CD32",
    "#FFD700",
    "#8A2BE2",
    "#FF1493",
    "#00FA9A",
    "#FF4500",
    "#2F4F4F",
    "#A52A2A"
];

var colors = document.querySelector('.colors');
colorsList.forEach(color => {
    var divcolor = document.createElement('div');
    divcolor.classList.add("color");
    
    var divcol = document.createElement('input');
    divcol.classList.add("col");
    divcol.type = 'color';
    divcol.value = color;
    
    divcol.addEventListener('mouseenter', (event) => handleTooltip(event));
    divcol.addEventListener('mouseleave', (event) => handleLeaveTooltip(event));
    
    divcolor.appendChild(divcol);
    colors.appendChild(divcolor);
});

let tooltip; 

function handleTooltip(event) {
    if (!tooltip) {
        tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = event.target.value;

        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'white';
        tooltip.style.color = 'black';
        tooltip.style.padding = '5px';
        tooltip.style.borderRadius = '3px';
        tooltip.style.top = (event.clientY + 10) + 'px'; 
        tooltip.style.left = (event.clientX + 10) + 'px';

        document.body.appendChild(tooltip);
    }
    tooltip.style.top = (event.clientY + 10) + 'px';
    tooltip.style.left = (event.clientX + 10) + 'px';
}
function handleLeaveTooltip(event) {
    if (tooltip) {
        document.body.removeChild(tooltip);
        tooltip = null; 
    }
}
