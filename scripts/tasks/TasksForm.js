import { saveTasks } from "./TasksDP.js";

// Task Form, name, expected completion date, saveButton, taskName clicked listens to Custom Event

const contentTarget = document.querySelector(".taskForm");
const eventHub = document.querySelector(".container")


export const taskComponent = () =>{

  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("submitTaskButton")) {
     
        
        const newTask = {
            task: document.querySelector("#name").value,
            completionDate: document.querySelector("#completionDate").value,
            userId: parseInt(sessionStorage.getItem('activeUser'), 10)
            
        } 
        saveTasks(newTask)
      }
      }) 


  const render = () => {
    contentTarget.innerHTML = `
      
      <fieldset>
        <label for="name">Name</label>
        <input type="text" name='name' id='name'>      
      </fieldset>
      <fieldset>
      <label for="completionDate">Expected Completion Date</label>
      <input type="date" name='completionDate' id='completionDate'>
      </fieldset>
      <fieldset id="submitTask">
    <button type="button" class="submitTaskButton">Submit Task</button> 
    </fieldset>
  
    `;
  };
  render()

}

