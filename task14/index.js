const fruits = [
    "Apples",
    "Bananas",
    "Oranges",
    "Mangoes",
    "Grapes",
    "Pineapples",
    "Strawberries",
    "Blueberries",
    "Avocados",
    "Watermelons"
];

const vegetables = [
    "Carrots",
    "Broccoli",
    "Spinach",
    "Potatoes",
    "Tomatoes",
    "Lettuce",
    "Cucumbers",
    "Bell peppers",
    "Onions",
    "Garlic"
];

const edible = [
    "Rice",
    "Bread",
    "Pasta",
    "Chicken",
    "Fish",
    "Beef",
    "Eggs",
    "Milk",
    "Cheese",
    "Yogurt"
];

const items = document.querySelector('.items')
items.style.display = 'flex';
items.style.flexDirection='row';
items.style.flexWrap='wrap';
const filter = document.querySelector('.filter')
filter.addEventListener('change', (e) => handlevalue(e))
let input = 'all'
function handlevalue(e) {
    input = e.target.value;
    display(input);
    manage();
    console.log(input)
}
let filteredItems = [...fruits, ...vegetables, ...edible];
manage();
function display(input) {
    switch (input) {
        case 'fruits':
            filteredItems = fruits;
            break;
        case 'vegetables':
            filteredItems = vegetables;
            break;
        case 'edible':
            filteredItems = edible;
            break;
        case 'all':
        default:
            filteredItems = [...fruits, ...vegetables, ...edible];
            break;
    }
}
function manage() {
    items.innerHTML = '';
    filteredItems.map(item => {
        const div = document.createElement('div')
        div.style.height = '100px';
        div.style.width = 'calc(33.33% - 10px)'; 
        div.style.fontSize = '20px';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';
        div.style.border = '1px solid #ddd';  
        div.innerText = item;
        items.append(div)
    });

}

