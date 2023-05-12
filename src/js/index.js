// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import { mainContainer } from '../modules/container.js';

window.onload = () => {
  const tasksArray = [];

  const body = document.querySelector('body');
  body.appendChild(mainContainer);

  tasksArray.forEach((task, taskIndex) => {
    const i = taskIndex;
    const taskContainer = document.querySelector('#task-container');
    taskContainer.innerHTML
      += ` <!--check input col-->
<div class="col-1">
  <!-- task selection form-->
  <form action="task-select-form" class="task-select-form d-flex justify-content-start align-items-center">
    <label id="task-select" for="task-select-input"> Select a task</label>
    <input id="task-select-input" class="form-check-input task-select-input" value="" type="checkbox"/>
  </form>
</div>
 <!--id task list-->
<div class="col-10 ">
  <p id="task-text" class="task-text">${tasksArray[i].taskDescription}</p>
</div>
 <!--move and drop-drop-down btn-->
<i class="bi bi-three-dots-vertical btn btn btn-sm col-1"></i>`;
  });
};

export { bootstrap as default };