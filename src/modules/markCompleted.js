import { TasksClass } from './tasksClass.js';

// mark task complete
export const markComplete = () => {
  //  get the elements
  const taskBoxEls = document.querySelectorAll('.task-select-input');
  const taskStatus = new TasksClass();
  // get index and checkbox value by iterating
  taskBoxEls.forEach((theEl, theElIndex) => {
    // functions to execute when a task checkbox changes
    const checkTaskElements = () => {
     const taskBoxChecked = theEl.checked;
    // const filteredTaskBoxEls = theEl.filter((a) => a.checked === true);
     if(taskBoxChecked === true) {
        taskStatus.taskCompleted(theElIndex, taskBoxChecked)
     };
    };
    // events
    theEl.addEventListener('change', checkTaskElements, false);
  });
};

export { markComplete as default };