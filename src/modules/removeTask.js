import { displayTasks } from './showTasks.js';
import { TasksClass } from './tasksClass.js';

export const removeTask = (taskCollection, theIndex) => {
  taskCollection.removeTask(theIndex);
  displayTasks(TasksClass);
};

export default removeTask;