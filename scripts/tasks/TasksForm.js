import { saveTasks, useTasks, editTasks } from "./TasksDP.js";

// Task Form, name, expected completion date, saveButton, taskName clicked listens to Custom Event

const contentTarget = document.querySelector(".taskForm");
const eventHub = document.querySelector(".container")


export const taskComponent = () =>{

  eventHub.addEventListener("click", event => {
    const updatedTask = useTasks()
    
    if (event.target.id.startsWith("editTask--")){
        const [prefix, id] = event.target.id.split("--")
        const foundTask = updatedTask.find( 
            (individualTask) => {
                return individualTask.id === parseInt(id, 10)
            }
        )
        document.querySelector("#name").value = foundTask.task
        document.querySelector("#completionDate").value = foundTask.completionDate
        document.querySelector("#taskId").value = foundTask.id
    }

} )

  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("submitTaskButton")) {
      
        const hiddenInputValue = document.querySelector("#taskId").value
        console.log(hiddenInputValue)

        if (hiddenInputValue !== ""){
          const editedTask = { 
          "id": parseInt(document.querySelector("#taskId").value, 10),
          "task": document.querySelector("#name").value,
          "completionDate": document.querySelector("#completionDate").value,
          "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
        }
        editTasks(editedTask).then(() => {
          eventHub.dispatchEvent(new CustomEvent ("taskEdited"))
        })
        }

    
        else {
          const newTask = {
              task: document.querySelector("#name").value,
              completionDate: document.querySelector("#completionDate").value,
              userId: parseInt(sessionStorage.getItem('activeUser'), 10)
              
          } 
        saveTasks(newTask).then(() => {
          eventHub.dispatchEvent(new CustomEvent ("taskCreated"))
        })
      }
      }})
     
    

  const render = () => {
    contentTarget.innerHTML = `
      
      <fieldset>
      <input type="hidden" id="taskId" name="taskId">
        <label for="name">Name</label>
        <input type="text" name='name' id='name'>      
      </fieldset>
      <fieldset>
      <label for="completionDate">Expected Completion Date</label>
      <input type="date" name="completionDate" id="completionDate">
      </fieldset>
      <fieldset id="submitTask">
    <button type="button" class="submitTaskButton">Submit Task</button> 
    </fieldset>
  
    `;
  };
  render()

}

