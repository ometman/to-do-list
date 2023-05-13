import { TasksClass } from './tasksClass.js';
// import { launchDom } from './theDOM.js';

// add new task by click event
export const addNewTask = () => {
  //  get the form from the main content
  const newTaskForm = document.querySelector('#new-task-form');
  const newTask = document.querySelector('#task-input-return');
  newTask.addEventListener('click', (e) => {
    e.preventDefault();

    const taskItem = document.querySelector('#task-input').value;
    if (taskItem !== '') {
      const todoTasks = new TasksClass();
      // the add function from the task class
      todoTasks.addTask(taskItem);
      todoTasks.displayAllTasks();
      newTaskForm.reset();
    }
  });
};

export { addNewTask as default };
