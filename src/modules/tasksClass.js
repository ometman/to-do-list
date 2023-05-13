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
    //  the task class is assigned as an object property of the class
    addTask = () => {
      const theIndex = this.taskCollection.length + 1;
      const { index } = this;
      const { description } = this;
      const { completion } = this;
      this.taskCollection.push({
        index: theIndex, description, completion: false,
      });
      localStorage.setItem('taskList', JSON.stringify(this.taskCollection));
    }

    displayAllTasks = () => {
      const taskContainer = document.querySelector('#task-container');
      const displayContainer = document.createElement('div');
      displayContainer.classList = 'display-container, row px-2 ms-0 me-0';
      displayContainer.innerHTML = '';
      const tCollection = this.taskCollection;
      tCollection.forEach((task, taskIndex) => {
        const i = taskIndex;
        displayContainer.innerHTML += ` 
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
            <p id="task-text" class="task-text">${this.taskCollection[i].description}</p>
            </div>
            <!--move and drop-drop-down btn-->
            <i id="remove-btn"class="remove-btn bi bi-three-dots-vertical btn btn-sm col-1"></i>`;
            taskContainer.appendChild(displayContainer);

            const removeTaskArr = [];
            const removeBtns = document.querySelectorAll('.display-container');
            
            removeTaskArr.push(removeBtns)
            console.log(removeTaskArr);
      });
      
    
    } // show all task entries

    removeTask(removeBtns) {
        removeBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            console.log('removetask')
            this.taskCollection.splice(btn.getAttribute('id'), 1);
            localStorage.setItem('taskList', JSON.stringify(this.taskCollection));
            this.displayAllBooks();
          });
        });
      }// removeBook

   // removeTask(theIndex) {
     // console.log('ready to remove');
    
      //   tc.sort((taskItem1, taskItem2) => taskItem1.theIndex - taskItem2.theIndex);
      //   tc.forEach((taskItem, taskItemIndex) => {
      //     taskItem.theIndex = taskItemIndex;
      //   });
   //   localStorage.setItem('taskList', JSON.stringify(this.taskCollection));
   // }

    getLocalStorage = () => this.taskCollection;
    // access and show local storage data
}

export { TasksClass as default };