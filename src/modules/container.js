



export const mainContainer = document.createElement('div');
mainContainer.classList.add('container', 'row', 'mx-auto', 'px-3', 'py-5');
mainContainer.innerHTML = `
<!--app body container-->
   <!-- <div class="container row mx-auto px-3 py-5"> -->
      <!--app container-->
      <div id="app-container" class="container-fluid row mx-auto bg-white border border-1 
      shadow d-flex justify-content-center">
        <!--header cols for title and refresh-->
        <div class="row p-2 d-flex justify-content-between align-items-center">
          <!--title col-->
          <div class="col-10 pt-3">
            <h1 id="app-title">Today's To Do</h1>
          </div>
          <!--refresh btn col-->
            <i class="bi bi-arrow-repeat btn btn-sm  col-1"></i> 
        </div>
        <hr>
        <!--input row-->
          <!--form for task entry -->
          <form action="new-task-form" class="row p-2 mb-1 pt-0 new-task-form d-flex justify-content-between align-items-center">
            <label id="task-entry" for="task-input"> Add a task here</label>
            <input id="task-input" class="col-10 border-0 task-input" type="text" value="" placeholder="Add you list..."/>
            <i id="task-input-return" class="bi bi-arrow-return-left btn btn btn-sm col-1"></i>
          </form>
        <hr>
        <!--listing tasks cols row-->
        <div id="task-container" class="row px-2 ms-0 me-0">
          <!--listing tasks here -->
        </div>
        <!--bottom container for clearing all selected lists-->
        <div class="bottom-container row p-2 py-3 m-0 z-3">
          <!--clear all completed btn-->
          <div class="col-12 mx-auto  d-flex justify-content-center">
            <button class="btn mx-auto">Clear all completed</button>
          </div>
        </div>
      </div> 
   <!-- </div> -->`;

   export { mainContainer as default };