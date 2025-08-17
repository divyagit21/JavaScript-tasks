// import { tasks } from './tasks.js'; 

// const aboutBtns = document.querySelectorAll('.about-btn');
// const modalOverlay = document.getElementById('modal-overlay');
// const closeBtn = document.getElementById('close-btn');
// const body = document.querySelector('body');
// const taskTitle = document.getElementById('task-title');
// const taskDescription = document.getElementById('task-description');

// const renderTasks = () => {
//     const container = document.querySelector('.container');
//     container.innerHTML = ''; 
//     tasks.forEach((task, index) => {
//         const taskCard = document.createElement('div');
//         taskCard.classList.add('flex-box');
//         taskCard.innerHTML = `
//             <div class="box"></div>
//             <div class="buttons">
//                 <button>Live</button>
//                 <button>Code</button>
//                 <button class="about-btn" data-index="${index}">About</button>
//             </div>
//         `;

//         container.appendChild(taskCard);
//     });
// };

// // Display task details in the modal
// const showTaskDetails = (taskIndex) => {
//     const task = tasks[taskIndex];
//     taskTitle.textContent = task.title;
//     taskDescription.textContent = task.description;
//     modalOverlay.style.display = 'flex';  // Show the modal
// };

// // Hide modal and reset body blur
// const hideModal = () => {
//     modalOverlay.style.display = 'none';  // Hide the modal
//     // body.classList.remove('blur');  // Remove the blur effect
// };

// // Event listener for "About" buttons
// document.addEventListener('click', (e) => {
//     if (e.target && e.target.classList.contains('about-btn')) {
//         const taskIndex = e.target.getAttribute('data-index');
//         showTaskDetails(taskIndex);
//     }
// });

// // Close button functionality
// closeBtn.addEventListener('click', hideModal);

// // Render tasks when the page loads
// renderTasks();
import { tasks } from './tasks.js';

const renderTasks = () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  tasks.forEach((task) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('flex-box');
    taskCard.innerHTML = `
      <div class="box">${task.title}</div>
      <div class="buttons">
        <a href="${task.live}" target="_blank" rel="noopener noreferrer">
          <button>Live</button>
        </a>
        <a href="${task.code}" target="_blank" rel="noopener noreferrer">
          <button>Code</button>
        </a>
      </div>
    `;
    container.appendChild(taskCard);
  });
};

renderTasks();
