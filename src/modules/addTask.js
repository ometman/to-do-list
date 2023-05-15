import { TasksClass } from './tasksClass.js';

// add new task by click event
export const addNewTask = () => {
  //  get the form from the main content
  const newTaskForm = document.querySelector('#new-task-form');
  const newTask = document.querySelector('#task-input-return');
  newTask.addEventListener('click', (e) => {
    e.preventDefault();

    const taskItem = document.querySelector('#task-input');
    if (taskItem.value !== '') {
      const taskText = taskItem.value;
      // the add function from the task class
      const todoTasks = new TasksClass();
      todoTasks.addTask(taskText);
      todoTasks.showAddedTasks();
      newTaskForm.reset();
    }
  });
};

export { addNewTask as default };
