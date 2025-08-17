const part = document.querySelectorAll('.partimg');
const option = document.querySelectorAll('.option');
part.forEach(i => {
    i.addEventListener('click', (e) => handlemain(e));
});

var mainpart = document.querySelector('.mainpart');

function handlemain(e) {
    let num;
    if (e.target.tagName.toLowerCase() === 'img') {
        var classlist = e.target.classList[1];
        num = parseInt(classlist.replace('part', ''));
        mainpart.setAttribute('src', `./images/${num}.png`);

        part.forEach(j => {
            if (j.classList.contains("present")) {
                j.classList.remove("present");
            }
        });

        e.target.classList.add("present");
    }
}

const track = document.querySelector('.splide__track');
const options = document.querySelectorAll('.option');

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        const offset = index * -100;
        track.style.transform = `translateX(${offset}%)`;
        options.forEach(opt => opt.classList.remove('option_now'));
        option.classList.add('option_now');
    });
});
