export const eventsFriendCardComponent = (eventArray) => {
  return `
  <section class="friendEventCard">
  <h4 class="eventName">Name of Event:${eventArray.name}</h4>
  <div class="eventDate">Event Date:${eventArray.eventDate}</div>
  <div class="eventLocation">Location of Event:${eventArray.location}</div>
  </section>
    `
  }
  