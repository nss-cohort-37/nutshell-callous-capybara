// event Card--, editButton, deleteButton, shows name, date and location 
// (upcoming event name in bold, background color - non white non offensive)
export const eventCardComponent = (eventArray) => {
  return `
  <section class="eventCard">
  <hr/>
    <h4 class="eventName">Name of Event:${eventArray.name}</h4>
    <div class="eventDate">Event Date:${eventArray.eventDate}</div>
    <div class="eventLocation">Location of Event:${eventArray.location}</div>
    <button id="editEvent--${eventArray.id}">Edit Event</button>
    </section>
    `
  }
  
