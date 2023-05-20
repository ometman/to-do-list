import { TasksClass } from './tasksClass.js';

//  get task status on checkbox
export const retainCheck = () => {
  //  get the elements
  const taskEls = document.querySelectorAll('.task-select-input');
  const checkStatus = new TasksClass();
  // get index and checkbox value by iterating and set checkbox
  taskEls.forEach((theEl, theElIndex) => {
    // theEl.checked = true;
    if (checkStatus.taskCollection[theElIndex].taskCompletion === true) {
    theEl.checked = true;
    }
  });
};

export { retainCheck as default };