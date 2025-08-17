var tabs = document.querySelectorAll('.tab');
var matter = document.querySelector('.matter'); 
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => handleTab(e));
});

function handleTab(e) {
    let num = e.target.innerText;
    matter.innerText = `Currently you are viewing ${num}`;
    tabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');  
}
