import { displayTasks } from './showTasks.js';
import { TasksClass } from './tasksClass.js';



export const removeTask = (btnIndex) => {
  const remTask = new TasksClass();
  remTask.taskRemover(btnIndex);
  displayTasks(TasksClass);
};

export default removeTask;