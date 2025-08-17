const questions = [
    "I enjoy meeting new people and socializing at large gatherings.",
    "I prefer spending time alone or in small groups rather than large social events.",
    "I feel energized after being around others.",
    "I enjoy trying new and unusual things (like foods, hobbies, or places).",
    "I often think about abstract or complex ideas.",
    "I am curious about a wide range of topics.",
    "I like to make detailed plans and follow them through.",
    "I prefer to be organized and keep my belongings tidy.",
    "I take my responsibilities seriously and follow through on tasks.",
    "I enjoy helping others even when it’s not convenient for me.",
    "I try to avoid conflict and prefer peaceful resolutions.",
    "I trust people easily and tend to see the good in others.",
    "I tend to stay calm and composed even in stressful situations.",
    "I feel anxious or easily frustrated in difficult situations."
];

let scores = Array(questions.length).fill(null);
const progressBar = document.querySelector('.bar');
const input = document.querySelector('.input');

function handleInput(e) {
    const questionIndex = parseInt(e.target.name.replace('question', ''));
    scores[questionIndex] = parseInt(e.target.value);
    updateProgressBar();
}

function updateProgressBar() {
    const totalScore = scores.reduce((acc, score) => acc + (score || 0), 0);
    const maxScore = questions.length * 5;
    const progressPercentage = (totalScore / maxScore) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

questions.map((question, index) => {
    const box = document.createElement('div');
    box.classList.add("box");

    const q = document.createElement('div');
    q.classList.add('question-text');
    q.innerHTML = `<div class="ques${index + 1}">${question}</div>`;

    const r = document.createElement('div');
    r.classList.add('score');

    for (let i = 1; i <= 5; i++) {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.value = i;
        radio.name = `question${index}`;
        radio.id = `question${index}_rating${i}`;

        const label = document.createElement('label');
        label.setAttribute('for', radio.id);
        label.textContent = i;

        r.appendChild(radio);
        r.appendChild(label);

        radio.addEventListener('change', handleInput);
    }

    box.appendChild(q);
    box.appendChild(r);

    input.appendChild(box);
});
