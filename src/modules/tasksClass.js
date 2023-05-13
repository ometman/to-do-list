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
      const tCollection = this.taskCollection;
      tCollection.forEach((task, taskIndex) => {
        const i = taskIndex;
        console.log(i);
        taskContainer.innerHTML += ` 
            <!--check input col-->
            <div class="col-1">
            <!-- task selection form-->
            <form action="task-select-form" class="task-select-form d-flex justify-content-start align-items-center">
            <label id="task-select" for="task-select-input"> Select a task</label>
            <input id="task-select-input" class="form-check-input task-select-input" value="" type="checkbox"/>
            </form>
            </div>
            <!--id task list-->
            <div class="col-10 ">
            <p id="task-text" class="task-text">${this.taskCollection[i].description}</p>
            </div>
            <!--move and drop-drop-down btn-->
            <i class="bi bi-three-dots-vertical btn btn btn-sm col-1"></i>`;
      });

      const removeBtns = document.querySelectorAll('.added-bks');
      this.removeBook(removeBtns);
    } // show all task entries

    //   removeBook(removeBtns) {
    //     removeBtns.forEach((btn) => {
    //       btn.addEventListener('click', () => {
    //         this.bookCollection.splice(btn.getAttribute('id'), 1);
    //         localStorage.setItem('Books', JSON.stringify(this.bookCollection));
    //         this.showAllBooks();
    //       });
    //     });
    //   }// removeBook

    getLocalStorage() {
      return this.taskCollection;
    } // access and show local storage data
}

export { TasksClass as default };