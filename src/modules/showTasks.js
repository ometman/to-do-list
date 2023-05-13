import { TasksClass } from './tasksClass.js';

export const displayTasks = () => {
  
  const showTasks = new TasksClass();
  showTasks.displayAllTasks();
}
export default displayTasks;