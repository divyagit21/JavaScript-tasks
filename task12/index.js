var input = document.querySelector('input');
var items = document.querySelectorAll('li');
input.addEventListener('input', search);
function search(e) {
    var name = e.target.value.toLowerCase(); 
    items.forEach((item) => {
        var itemText = item.innerText.toLowerCase();
        if (itemText.includes(name)) {
            item.style.display = 'list-item'; 
            var highlightedText = highlight(item.innerText, name);
            item.innerHTML = highlightedText;
        } 
    });
}

function highlight(text, term) {
    var regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<span style="background-color: red;">$1</span>');
}