import { useEvents } from "./EventsDP.js";
import { eventCardComponent } from "./Events.js";
import { eventsFriendCardComponent } from "./EventsFriends.js";
import { useFriends } from "../friends/FriendsDP.js";

// render events from API both users and friends, custom event for edit, delete eventHub

const contentTarget = document.querySelector(".eventView");
const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".eventFriends")


const displayEvents = (updatedEvents) => { 
  // only want it to render the edited article 
  const eventUserArray = updatedEvents.filter(
      event => {
          return event.userId === parseInt(sessionStorage.getItem('activeUser'), 10)
      }
  ) 
  contentTarget.innerHTML = eventUserArray.map(art => eventCardComponent(art)).join("")
  }
export const eventListComponent = () => {

  const events = useEvents()
  const friends=useFriends()
   

    eventHub.addEventListener("eventCreated", event => {
        const createdEvent = useEvents()
        displayEvents(createdEvent)
    })


    eventHub.addEventListener("eventHasBeenEdited", event => {
        const updatedEvent = useEvents()
        displayEvents(updatedEvent)
    })

    eventHub.addEventListener("loginButtonClicked", event => {

        const render = () => {
          
            const eventUserArray = events.filter(
                event => {
                    return event.userId === parseInt(sessionStorage.getItem('activeUser'), 10)
                }
            ) 
            contentTarget.innerHTML =eventUserArray.map(art => eventCardComponent(art)).join("")
    

            
        // filter through friends array to filter only active user's friends
            let activeUserFriendsArray=friends.filter(friend => {
              return friend.activeUserId === parseInt(sessionStorage.getItem('activeUser'), 10)})
              console.log(activeUserFriendsArray)



            contentElement.innerHTML=activeUserFriendsArray.map(friend => {

              const eventFriends=events.filter(event => event.userId===friend.userId)
              console.log(eventFriends)
              const html =eventFriends.map(art => eventsFriendCardComponent(art)).join("")
              return html
             


            }).join("")

        
        }
        render()



    })

}