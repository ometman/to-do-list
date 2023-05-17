export class TasksClass {
  constructor(taskIndex, taskDescription, taskCompletion) {
    this.index = taskIndex;
    this.description = taskDescription;
    this.completion = taskCompletion;
    this.taskCollection = JSON.parse(localStorage.getItem('taskList')) || [];
  }

  taskCount = () => this.taskCollection.length;

  newTaskIndex = () => this.taskCount + 1;

  isEmptyCollection = () => this.taskCount === 0;

  //  add task method: declaring the object variables and assign the values to them
  //  the task class is assigned as an object property of the class. Do page reload after adding.
  addTask = (taskText) => {
    const tC = this.taskCollection;
    const theIndex = tC.length + 1;
    tC.push({
      taskIndex: theIndex, taskDescription: taskText, taskCompletion: false,
    });
    tC.sort((task1, task2) => task1.taskIndex - task2.taskIndex);
    localStorage.setItem('taskList', JSON.stringify(tC));
    window.location.reload();
  }

  displayAllTasks = () => {
    const tC = this.taskCollection;
    tC.forEach((tcTask, tcTaskIndex) => {
      const i = tcTaskIndex;
      const taskContainer = document.querySelector('#task-container');
      const displayContainer = document.createElement('div');
      displayContainer.classList = 'display-container, row px-2 ms-0 me-0';
      displayContainer.id = i + 1;
      displayContainer.innerHTML = '';
      displayContainer.innerHTML = ` 
      <!--check input col-->
      <div class="col-1">
      <!-- task selection form-->
      <form action="task-select-form" class="task-select-form d-flex justify-content-start align-items-center">
      <label id="task-select" for="task-select-input"> Select a task</label>
      <input id="task-select-input" class="form-check-input task-select-input" disabled="false" type="checkbox"/>
      </form>
      </div>
      <!--id task list-->
      <div class="col-10 ">
      <p id="task-text" class="task-text">${tC[i].taskDescription}</p>
      </div>
      <!--move and drop-drop-down btn-->
      <i id="remove-btn"class="remove-btn bi bi-three-dots-vertical btn btn-sm col-1"></i>`;

      taskContainer.appendChild(displayContainer);
    });

  } // show all tasks

  taskRemover = (btnIndex) => {
    const tC = this.taskCollection;
    // remove by splicing
    tC.splice(btnIndex, 1);
    // rearrange by sorting using their index
    tC.sort((task1, task2) => task1.taskIndex - task2.taskIndex);
    // reassign task index by iterations
    tC.forEach((taskItem, taskItemIndex) => {
      taskItem.taskIndex = taskItemIndex + 1;
    });
    localStorage.setItem('taskList', JSON.stringify(this.taskCollection));
    window.location.reload();
  }

//   taskEditor(elIndex, newTaskDescription) {
//    const tC = this.taskCollection;
//    console.log('ready to editor')
//   tC[elIndex].taskDescription = newTaskDescription;
//   localStorage.setItem('taskList', JSON.stringify(this.taskCollection));
//  window.location.reload();
//   }

  getLocalStorage = () => this.taskCollection;
  // access and show local storage data
}

export { TasksClass as default };