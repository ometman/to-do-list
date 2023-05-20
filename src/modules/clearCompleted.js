import { TasksClass } from './tasksClass.js';

// clear all completed
export const clearComplete = () => {
  //  get the elements
  const clearCompletedBtn = document.querySelector('#clear-complete');
  const taskBoxEls = document.querySelectorAll('.task-select-input');
  const taskStatus = new TasksClass();
  // get index and checkbox value by iterating to remove
  clearCompletedBtn.addEventListener('click', () => {
    taskBoxEls.forEach((theEl, theElIndex) => {
      if (theEl.checked === true) {
        taskStatus.clearCompletedTask(theElIndex);
        (theEl.parentElement.parentElement.parentElement).remove();
      }
    });
  });
};

export { clearComplete as default };