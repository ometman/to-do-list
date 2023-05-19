import { TasksClass } from './tasksClass.js';

// clear all completed
export const clearComplete = () => {
  //  get the elements
  const clearCompletedTask = document.querySelector('#clear-complete');
  const taskBoxEls = document.querySelectorAll('.task-select-input');
  const taskStatus = new TasksClass();
  // get index and checkbox value by iterating
  clearCompletedTask.addEventListener('click', () => {
    taskBoxEls.forEach((theEl) => {
      if (theEl.checked) {
        theEl.checked = theEl.unchecked;
        taskStatus.clearCompletedTask();
      }
    });
  });
};

export { clearComplete as default };