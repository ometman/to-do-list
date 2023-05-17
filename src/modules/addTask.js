import { keyBy } from 'lodash';
import { even } from 'prelude-ls';
import { TasksClass } from './tasksClass.js';

// add new task by click event
export const addNewTask = () => {
  //  get the form from the main content
  const newTaskForm = document.querySelector('#new-task-form');
  const taskItem = document.querySelector('#task-input');
  const newTask = document.querySelector('#task-input-return');
  // using mouse click on btn
  newTask.addEventListener('click', (e) => {
    e.preventDefault();

    if (taskItem.value !== '') {
      const taskText = taskItem.value;
      // the add function from the task class, call reload at addTask before reset from
      // no need for displayAllTasks() here
      const todoTasks = new TasksClass();
      todoTasks.addTask(taskText);
      newTaskForm.reset();
    }
  });
  // using keyboard enter key
  taskItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      newTask.click();
    }
  });
};

export { addNewTask as default };
