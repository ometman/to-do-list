import { TasksClass } from './tasksClass.js';

// clear all completed
export const clearComplete = () => {
  //  get the elements
  const clearCompletedTask = document.querySelector('#clear-complete');
  const taskBoxEls = document.querySelectorAll('.task-select-input');
  const taskStatus = new TasksClass();
  // get index and checkbox value by iterating
  taskBoxEls.forEach((theEl) => {
    // functions to execute when a task checkbox changes
    const clearCompleted = () => {
      // clear all check marks
      theEl.checked = theEl.unchecked;
      const clearChecks = theEl.checked;
      // parse the index and false status to array
      if (clearChecks === false) {
        taskStatus.clearCompletedTask(clearChecks);
      }
    };
    // events
    clearCompletedTask.addEventListener('click', clearCompleted, false);
  });
};

export { clearComplete as default };