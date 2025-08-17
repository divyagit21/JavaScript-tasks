const positiveQuotes = [
  "Today is a new day, full of possibilities.",
  "Believe in yourself and all that you are.",
  "The best way to predict the future is to create it.",
  "You are capable of amazing things.",
  "Every day is a second chance.",
  "You are stronger than you think.",
  "Success starts with self-belief.",
  "Your only limit is you.",
  "Don't wait for opportunity, create it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Take it one day at a time.",
  "Do something today that your future self will thank you for.",
  "Focus on the journey, not the destination.",
  "Small steps every day lead to big changes.",
  "You are the author of your own story.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Good things are going to happen.",
  "Be a voice, not an echo.",
  "Dream big, work hard, stay focused.",
  "You have the power to create change.",
  "Don't stop until you're proud.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Start where you are. Use what you have. Do what you can.",
  "Believe in yourself and magic will happen.",
  "You’ve got this.",
  "The only way to do great work is to love what you do.",
  "Your attitude determines your direction.",
  "Positivity is a choice, and today I choose it.",
  "The best time for new beginnings is now.",
  "Believe in the power of yet."
];


const getquote=()=>{
  let num=Math.floor(Math.random()*positiveQuotes.length);
  let quote=document.getElementById('quote')
  quote.innerText=positiveQuotes[num];
}

const canvas = document.getElementById('scratch')
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const context = canvas.getContext("2d");
const init = () => {
  let gradientColor = context.createLinearGradient(0, 0, 135, 135);
  gradientColor.addColorStop(0, "#c3a3f1");
  gradientColor.addColorStop(1, "#6414e9");
  context.fillStyle = gradientColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
};

let draw = false;

const isDrawing = (e) => {
  if (draw) {
    drawing(e)
  }
}
const notDrawing = () => {
  draw = false;
}
function drawing(e) {
  var rect = canvas.getBoundingClientRect(); 
  var xx = e.clientX - rect.left;  
  var yy = e.clientY - rect.top;   
  context.globalCompositeOperation = "destination-out";
  context.beginPath(); 
  context.arc(xx, yy, 20, 0, Math.PI * 2)
  context.fill();
}
canvas.addEventListener('mousedown', () => {
  draw = true;
});
canvas.addEventListener('mousemove', isDrawing)
canvas.addEventListener('mouseout', notDrawing)
canvas.addEventListener('mouseup', notDrawing);

window.onload = () => {
  init();
  getquote();
};
