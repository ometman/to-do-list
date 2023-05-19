import { TasksClass } from './tasksClass.js';

export const displayTasks = () => {
  const showTasks = new TasksClass();
 // if (showTasks.getLocalStorage().length >= 0) {
    showTasks.displayAllTasks();
 // } // get store books or show message if empty
};
export default displayTasks;
