// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import { TasksClass } from '../modules/tasksClass.js'
import { displayTasks } from '../modules/showTasks.js';
import { launchDOM } from '../modules/theDOM.js';
import { addNewTask } from '../modules/addTask.js';
// import { TasksClass } from '../modules/tasksClass.js';
// import { removeTask } from '../modules/removeTask.js';

window.onload = () => {
  launchDOM();
  displayTasks();
  addNewTask();

  // event listners the displayed task DOM elements
  // const agent = document.querySelectorAll('.task-container')
  // const agentArr = [];
  // agentArr.push(agent);
  // console.log(agentArr)
  // agent.addEventListener('click', (ev) => {

  // task removal
  //  if (agent.classList.contains('task-container')) {
  // target.classList.toggle = 'remove-btn bi bi-trash btn btn-sm col-1';
  //    console.log(agent);
  // call the method on the target
  // removeTask(TasksClass, target.id);
  // }

  // task editing
  // if (target.classList.contains('task-item')) {
  //     editTask(taskStore, target);
  //   }
  //   if (target.classList.contains('task-title')) {
  //     const parent = target.parentNode.parentNode;
  //     editTask(taskStore, parent);
  //   }
  // });
};

export { bootstrap as default };