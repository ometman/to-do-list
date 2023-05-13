// import { TasksClass } from './tasksClass.js';

const 

const localStoreTasks = (tasksList) => {
  localStorage.setItem('tasksList', JSON.stringify(tasksList));
};

export { taskCollection, localStoreTasks };