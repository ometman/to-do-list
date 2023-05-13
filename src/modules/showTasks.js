import { TasksClass } from './tasksClass.js';

export const tasksList = () => {
  const showTasks = new TasksClass();
  showTasks.displayAllTasks();
}
export default tasksList;