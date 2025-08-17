var products=[
    {name:"apple",cost:50},
    {name:"banana",cost:10},
    {name:"carrot",cost:60},
    {name:"dragon fruit",cost:20},
    {name:"onions",cost:80},
]
var items=document.querySelector('.items')
products.forEach((product)=>{
    var item=`<div class="item"><div class="info">${product.name}</div> <div class="cost">${product.cost}</div>     <input type="button" value="Add"></div>`
    items.innerHTML+=item+'\n';
})
var item=document.querySelectorAll('.item')
var content = document.querySelector('.added-items');
var total=document.querySelector('.total')
for (let i = 0; i < item.length; i++) {
    var inp = item[i].querySelector('input')
    inp.addEventListener('click', () => { Add_to_cart(item[i]) });
}
function Add_to_cart(item) {
    var info = item.querySelector('.info');
    var cost = item.querySelector('.cost');
    newcont = info.innerText;
    var itemcost=parseInt(cost.innerText);
    total.innerText = `Total: $${parseInt(total.innerText.replace('Total: $', '')) + itemcost}`;
    content.innerText += newcont +" "+ itemcost + '\n';
    item.remove();
}
