var input = document.querySelector('input')
input.addEventListener('input', search);
var items = document.querySelectorAll('li')
var names = []
items.forEach((item) => {
    names.push(item.innerText);
})
function search(e) {
    var name = (e.target.value.toLowerCase());
    {
        items.forEach((item) => {
            if (item.innerText.toLowerCase().includes(name)) {
                item.style.display = 'list-item';  
            } else {
                item.style.display = 'none'; 
            }
        });
    }
}