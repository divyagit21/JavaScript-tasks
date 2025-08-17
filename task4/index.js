const column = document.querySelectorAll('.col');
var flipped = [];
let gameInProgress = false;
var flip = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function random() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    for (var i = 0; i < arr.length; i++) {
        var j = Math.floor(Math.random() * arr.length);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }

    column.forEach((col, index) => {
        const back = col.querySelector('.card-back');
        const card = col.querySelector('.card');
        card.classList.add(`card${index}`);
        const source = `./images/${((arr[index]) % 6) + 1}.png`;
        back.innerHTML = `<img src=${source}></img>`;
        col.addEventListener('click', reversecard);
    });
}

function reversecard() {
    if (flipped.length === 2 || gameInProgress || this.classList.contains('matched')) {
        return;
    }
    
    const card = this.querySelector('.card');
    const cardIndex = parseInt(card.classList[1].replace("card", ""));
    
    if (flip[cardIndex] === 1) {
        return;
    }

    const imgnumber = card.querySelector('img');
    flipped.push({ card, imgsrc: imgnumber.getAttribute('src') });
    card.style.transform = 'rotateY(180deg)';
    card.style.transition = '0.5s ease-in';
    flip[cardIndex] = 1;

    if (flipped.length === 2) {
        gameInProgress = true;

        if (flipped[0].imgsrc === flipped[1].imgsrc) {
            flipped[0].card.classList.add('matched');
            flipped[1].card.classList.add('matched');
            flipped = [];
            column.forEach(col => col.style.pointerEvents = 'none');

            setTimeout(() => {
                column.forEach(col => col.style.pointerEvents = 'auto');
                gameInProgress = false;
            }, 1000);
        } else {
            setTimeout(() => {
                flipped[0].card.style.transform = 'rotateY(0deg)';
                flipped[0].card.style.transition = '0.5s ease-in';
                flipped[1].card.style.transform = 'rotateY(0deg)';
                flipped[1].card.style.transition = '0.5s ease-in';
                
                flip[parseInt(flipped[0].card.classList[1].replace("card", ""))] = 0;
                flip[parseInt(flipped[1].card.classList[1].replace("card", ""))] = 0;

                flipped = [];
                column.forEach(col => col.style.pointerEvents = 'auto');
                gameInProgress = false;
            }, 1000);
        }
    }
}

random();
