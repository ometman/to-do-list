import { TasksClass } from './tasksClass.js';

// edit new task by click event
export const editTask = () => {
  //  get the elements
  const editElement = document.querySelectorAll('.task-text');
  const editTask = new TasksClass();
  // get index and text content by iterating
  editElement.forEach((el, elIndex) => {
    // functions for editing
    const editContent = () => el.setAttribute('contenteditable', 'true');
    const taskUpdate1 = () => { 
      const taskItemInput = el.innerText;
      editTask.taskEditor(elIndex, taskItemInput); 
    };
    const taskUpdate2 = () => el.setAttribute('contenteditable', 'true');
    // events 
    el.addEventListener('click', editContent, false);
    el.addEventListener('input', taskUpdate1, false);
    el.addEventListener('keydown', taskUpdate2, false);
  });
};

export { editTask as default };