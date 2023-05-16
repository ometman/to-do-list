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
    const theIndex = this.taskCollection.length + 1;
    this.taskCollection.push({
      taskIndex: theIndex, taskDescription: taskText, taskCompletion: false,
    });
    localStorage.setItem('taskList', JSON.stringify(this.taskCollection));
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
      <input id="task-select-input" class="form-check-input task-select-input" type="checkbox"/>
      </form>
      </div>
      <!--id task list-->
      <div class="col-10 ">
      <p id="task-text" class="task-text">${tC[i].taskDescription}</p>
      </div>
      <!--move and drop-drop-down btn-->
      <i id="remove-btn"class="remove-btn bi bi-three-dots-vertical btn btn-sm col-1"></i>`;

      taskContainer.appendChild(displayContainer);

      const dcArray = [displayContainer];
      dcArray.forEach((dcEl) => {
        dcEl.addEventListener('click', () => {
          const targetIndex = dcEl.id;
          this.removeTask(targetIndex);
        });
      });
    });
  } // show tasks added

  removeTask = (targetIndex) => {
    const tC = this.taskCollection;
    console.log(targetIndex)
    tC.splice(targetIndex, 1);
    console.log(tC);
    // tC.sort((taskItem1, taskItem2) => taskItem1.theIndex - taskItem2.theIndex);
    // tC.forEach((taskItem, taskItemIndex) => {
    // taskItem.theIndex = taskItemIndex;
    // });
    localStorage.setItem('taskList', JSON.stringify(this.taskCollection));
  }

  getLocalStorage = () => this.taskCollection;
  // access and show local storage data
}

export { TasksClass as default };