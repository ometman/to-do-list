// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import { TasksClass } from '../modules/tasksClass.js'
import { tasksList } from '../modules/showTasks.js';
import { launchDOM } from '../modules/theDOM';

// import { addNewTask } from '../modules/addRemoveTask.js';



window.onload = () => {

  launchDOM();
  tasksList();

  // addNewTask();


};

export { bootstrap as default };