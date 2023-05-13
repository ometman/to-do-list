import { TasksClass } from './tasksClass.js';
import { mainContainer } from './container.js';

//  append the main content to the body
const body = document.querySelector('body');
body.appendChild(mainContainer);

//  get the form from the main content
export const addTaskForm = document.querySelector('#new-task-form');

// add new task by click event 
export const addNewTask = () => {
  const newTask = document.querySelector('#task-input-return');
  newTask.addEventListener('click', (e) => {
    e.preventDefault();

    const taskItem = document.querySelector('#task-input').value;
    const todoTasks = new TasksClass(taskCount() + 1, taskItem, false);

    // the add function from the task class
    todoTasks.addTask();
    // todoTasks.showAllTasks();
    addTaskForm.reset();

   
  });



  // const awesomeBooksIn = new BooksClass();
  // if (awesomeBooksIn.getLocalStorage().length > 0) {
  //   awesomeBooksIn.showAllBooks();
  // } else {
  //   const showBks = document.querySelector('#show-bks');
  //   showBks.textContent = 'No books currrently added';
  // } // get store books or show message if empty
};


export { addTaskForm as default };

