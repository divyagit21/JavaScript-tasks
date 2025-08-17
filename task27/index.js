var container = document.querySelector('.tags_container')
var input = document.querySelector('input')
let tagsarr = [];

window.addEventListener('keydown', (e) => handlekeyDown(e))
function handlekeyDown(e) {
    let tag = input.value.trim().toLowerCase();
    if (e.key === "Enter" && tag != '') {
        handleAdd(tag);
        input.value = '';
    }
    if (e.key === 'Backspace') {
        if (tagsarr.length > 0) {
            var lastTag = tagsarr.pop();
            var answerTag = getTagByContent(lastTag);
            var answers = document.querySelectorAll('.answer');
            answers.forEach((ans) => {
                if (ans.innerText === lastTag) {
                    ans.remove();
                }
            })
            if (answerTag) {
                answerTag.remove();
            }
        }
        return;
    }
}

function getTagByContent(text) {
    const tags = document.querySelectorAll('.tag');
    let found = null;
    tags.forEach(t => {
        if (t.innerText === text) {
            found = t;
        }
    });
    return found;
}

function handleAdd(tag) {
    if (tagsarr.includes(tag)) {
        var alreadytag = getTagByContent(tag);
        if (alreadytag) {
            alreadytag.style.backgroundColor = 'grey';
            setTimeout(() => {
                alreadytag.style.backgroundColor = '';
            }, 1000)
        }
        return;
    }

    tagsarr.push(tag.toLowerCase());

    var tagelement = document.createElement('span');
    tagelement.classList.add('tag')
    tagelement.innerText = tag;
    const closeIcon = document.createElement('i');
    closeIcon.className = 'fa fa-close';
    closeIcon.style.fontSize = '18px';
    closeIcon.style.marginLeft = '8px';
    closeIcon.style.cursor = 'pointer';

    var solutionTag = document.querySelector('.solution');
    var answerTag = document.createElement('span');
    answerTag.classList.add('answer')
    answerTag.innerText = tag;

    closeIcon.addEventListener('click', () => {
        container.removeChild(tagelement);
        tagsarr = tagsarr.filter(t => t !== tag.toLowerCase());
        var answers = document.querySelectorAll('.answer');
        answers.forEach((ans) => {
            if (ans.innerText === tag) {
                solutionTag.removeChild(ans);
            }
        })
    });
    solutionTag.appendChild(answerTag)
    tagelement.appendChild(closeIcon);
    container.insertBefore(tagelement, input);

}
