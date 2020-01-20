import { useTasks, deleteTask, getTasks } from "./TasksDP.js";
import { taskCardComponent } from "./Tasks.js";

// renders form and tasks, custom event for edit ,delete eventHub


const contentTarget = document.querySelector(".taskView");
const eventHub = document.querySelector(".container")

export const taskListComponent = () =>{

  const tasks=useTasks()

  const render = (taskArray) => {

    const activeUserTaskArray=taskArray.filter(task => {
     return task.userId === parseInt(sessionStorage.getItem('activeUser'), 10)
    })
    console.log(activeUserTaskArray)
    contentTarget.innerHTML= activeUserTaskArray.map(task=> taskCardComponent(task)).join("")

  }
  
  eventHub.addEventListener("loginButtonClicked", event => {
    render(tasks)
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteTask--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
      
        deleteTask(id).then(() => render(useTasks()) )
    }
})

eventHub.addEventListener("click", event => {
  if(event.target.id.startsWith("taskCheckBox")){
    // var checkedOrNot = document.getElementById("taskCheckBox").checked

    console.log("this should be deleted")
    const element = document.getElementById("taskCard")
      element.classList.add("hidden")

 
 }
 
})



}