// fetch PUT, POST, DELETE

let tasks =[]

export const useTasks =()=>tasks.slice() 
    
export const getTasks = () => fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(parsedTasks => tasks = parsedTasks)




export const saveTasks = task => {
      return fetch('http://localhost:8088/tasks', {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(task)
       })
       .then(getTasks)
     }


      
export const deleteTask = taskId =>{
  return fetch(`http://localhost:8088/tasks/${taskId}`, {
    method: "DELETE"
  })
    .then(getTasks)
}



