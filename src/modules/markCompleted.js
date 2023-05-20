import { TasksClass } from './tasksClass.js';

// mark task complete
export const markComplete = () => {
  //  get the elements
  const taskBoxEls = document.querySelectorAll('.task-select-input');
  const taskStatus = new TasksClass();
  let taskBoxValue = false;
  // get index and checkbox value by iterating
  taskBoxEls.forEach((theEl, theElIndex) => {
    // theEl.checked = true;
    theEl.addEventListener('change', () => {
      if (theEl.checked === true) {
        taskBoxValue = true;
      }
      if (theEl.checked === false) {
        taskBoxValue = false;
      }
      taskStatus.taskCompleted(theElIndex, taskBoxValue);
    });
  });
};

export { markComplete as default };