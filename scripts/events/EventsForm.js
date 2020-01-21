import { useEvents, saveEvents, editEvents } from "./EventsDP.js";

// event form--name, date, location, add event button, editButtonClicked listens to Custom Event

const contentTarget = document.querySelector(".eventForm");
const eventHub = document.querySelector(".container")

export const eventComponent = () => {

  eventHub.addEventListener("click", event => {
    
    const updatedEvents = useEvents()

    if (event.target.id.startsWith("editEvent--")){
        const [prefix, id] = event.target.id.split("--")
        const foundEvent = updatedEvents.find( 
            (individualEvent) => {
                return individualEvent.id === parseInt(id, 10)
            }
        )
        console.log("foundEvent", foundEvent)
        document.querySelector("#eventName").value = foundEvent.name 
        document.querySelector("#eventDate").value = foundEvent.eventDate
        document.querySelector("#location").value = foundEvent.location
        document.querySelector("#eventId").value = foundEvent.id
    }

} )


    eventHub.addEventListener("click", event => {
      
      if (event.target.classList.contains("submitEventButton")) {
        
        const events = useEvents()
        const hiddenInputValue = document.querySelector("#eventId").value 
      if (hiddenInputValue !== ""){

        const editedEvent = {
          "id": parseInt(document.querySelector("#eventId").value, 10),
          "name": document.querySelector("#eventName").value,
          "eventDate": document.querySelector("#eventDate").value,
          "location": document.querySelector("#location").value,
          "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
        }

        editEvents(editedEvent).then(() => {
          eventHub.dispatchEvent(new CustomEvent("eventHasBeenEdited"))
      })
      }

        else {  
          const newEvent = {
              "name": document.querySelector("#eventName").value,
              "eventDate": document.querySelector("#eventDate").value,
              "location": document.querySelector("#location").value,
              "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
              
          } 
          saveEvents(newEvent).then(() => {
            eventHub.dispatchEvent(new CustomEvent("eventCreated"))
          })
        }
    }}) 


// finish editing below this form 
  const render = () => {
    contentTarget.innerHTML = `
      
      <fieldset>
      <section class="sectionTitle">Event</section>
      <br>
      <label for="title">Title</label>
      <input type="text" name='eventName' id='eventName'>      
      </fieldset>
      <fieldset>
        <input type="hidden" name="eventId" id="eventId">
        <label for="eventDate">Event Date</label>
        <input type="date" name='eventDate' id='eventDate'>      
      </fieldset>
      <fieldset>
        <label for="location">Location</label>
        <input type="text" name='location' id='location'>      
      </fieldset>
      <fieldset id="submitEvent">
    <button type="button" class="submitEventButton">Submit Event</button> 
    </fieldset>

    `;
  };
  render()

}