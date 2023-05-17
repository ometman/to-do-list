import { TasksClass } from './tasksClass.js';

// edit new task by click event
export const editTask = () => {
  //  get the form from the main content
  const taskItem = document.querySelector('#task-input');
  const editElement = document.querySelectorAll('.task-text');
  editElement.forEach((el, elIndex) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
     // const newTaskDescription = taskItem.value;
      taskItem.value = el.textContent;
      const editedTask = new TasksClass();
      editedTask.taskEditor(elIndex, newTaskDescription)
    }) 
  });
  document.querySelector('#new-task-form').reset();
};

export { editTask as default };