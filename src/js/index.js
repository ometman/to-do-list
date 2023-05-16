// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import { TasksClass } from '../modules/tasksClass.js'
import { displayTasks } from '../modules/showTasks.js';
import { launchDOM } from '../modules/theDOM.js';
import { addNewTask } from '../modules/addTask.js';
import { TasksClass } from '../modules/tasksClass.js';
import { removeTask } from '../modules/removeTask.js';
import { changeIcon } from '../modules/changeIcon.js'

window.onload = () => {
  launchDOM();

  // refresh page by refresh icon btn
  const refreshPage = document.querySelector('#refresh-page-btn');
  refreshPage.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
  });

  displayTasks();

  // // change dot icons btn to type trash btn
  // const changeIcon = document.querySelectorAll('.remove-btn');
  // changeIcon.forEach((value) => {
  //   value.addEventListener('mousedown', (e) => {
  //     e.preventDefault();
  //     value.classList.toggle('bi-trash');
  //   });
  // });

  addNewTask();
  // removeTask();
  changeIcon();

  // task editing
  // if (target.classList.contains('task-item')) {
  //     editTask(taskStore, target);
  //   }
  //   if (target.classList.contains('task-title')) {
  //     const parent = target.parentNode.parentNode;
  //     editTask(taskStore, parent);
  //   }
  // });
}



export { bootstrap as default };