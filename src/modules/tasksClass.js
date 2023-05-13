// import { launchDom } from './theDOM.js'

export class TasksClass {
  constructor(taskIndex, taskDescription, taskCompletion) {
    this.index = taskIndex;
    this.description = taskDescription;
    this.completion = taskCompletion;
    this.collection = JSON.parse(localStorage.getItem('tasksList')) || [];
  }

    taskCount = () => this.taskCollection.length;

    newTaskIndex = () => this.taskCount() + 1;

    //  add task method: declaring the object variables and assign the values to them
    //  the task class is assigned as an object property of the class
    addTask = () => {
      console.log('hello');
      const { index } = this;
      const { description } = this;
      const { completion } = this;
      this.taskCollection.push({ index, description, completion });
      localStorage.setItem('taskLists', JSON.stringify(this.taskCollection));
    }

    displayAllTasks = () => {
      const taskContainer = document.querySelector('#task-container');
      console.log(taskContainer)
      for (let i = 0; i < this.taskCount.length; i += 1) {
        taskContainer.id = `${i}`;
        taskContainer.innerHTML = ` 
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
        <p id="task-text" class="task-text"></p>
      </div>
      <!--move and drop-drop-down btn-->
      <i class="bi bi-three-dots-vertical btn btn btn-sm col-1"></i>`;
    }

        const removeBtns = document.querySelectorAll('.added-bks');
        this.removeBook(removeBtns);
    } // ShowAllBooks

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