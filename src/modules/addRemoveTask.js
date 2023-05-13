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
    const todoTasks = new TasksClass('', taskItem, '');

    // the add function from the task class
    todoTasks.addTask();
    todoTasks.displayAllTasks();
    newTaskForm.reset();
  });



  // const awesomeBooksIn = new BooksClass();
  // if (awesomeBooksIn.getLocalStorage().length > 0) {
  //   awesomeBooksIn.showAllBooks();
  // } else {
  //   const showBks = document.querySelector('#show-bks');
  //   showBks.textContent = 'No books currrently added';
  // } // get store books or show message if empty
};


export { addNewTask as default };

