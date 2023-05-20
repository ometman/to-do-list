// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import { TasksClass } from '../modules/tasksClass.js'
import { displayTasks } from '../modules/showTasks.js';
import { addNewTask } from '../modules/addTask.js';
import { removeTask } from '../modules/removeTask.js';
import { changeIcon } from '../modules/changeIcon.js';
import { editTask } from '../modules/editTask.js';
import { markComplete } from '../modules/markCompleted.js';
import { clearComplete } from '../modules/clearCompleted.js';
import { retainCheck } from '../modules/taskStatus.js';

window.onload = () => {
  // refresh page by refresh icon btn
  const refreshPage = document.querySelector('#refresh-page-btn');
  refreshPage.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.reload();
  });

  // display tasks
  displayTasks();
  // status
  retainCheck();

  // task removal
  const removeBtn = document.querySelectorAll('.remove-btn');
  removeBtn.forEach((btn, btnIndex) => {
    btn.addEventListener('click', () => {
      removeTask(btnIndex);
    });
  });

  // editing tasking
  editTask();
  // adding new task
  addNewTask();
  // complete task
  markComplete();
  // clear complete task
  clearComplete();
  // change icon on hover
  changeIcon();
};

export { bootstrap as default };