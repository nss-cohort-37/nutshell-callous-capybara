// taskCard--task name, checkbox, expectedDate deleteButton, editButton is the name itself

export const taskCardComponent = (task) => {
  return `
  <section class="taskCard" id="taskCard">
    <input type="checkbox" id="taskCheckBox">
    <h4 class="taskName">${task.task}</h4>
    <button id="deleteTask--${task.id}">Delete Task</button>
    <button id="editTask--${task.id}">Edit Task</button>
    </section>
    `
  }