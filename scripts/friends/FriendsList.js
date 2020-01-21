import { useFriends } from "./FriendsDP.js"
import { friendCardComponent } from "./Friends.js"

// listens to custom event of the search values
// finds matching usernames, render in friend preview, 
// listens to add button custom event-- post to friends JSON, 
// // getFriends and render onto List (LIKE ITINERARY PREVIEW)


const eventHub = document.querySelector(".container")
const contentTarget=document.querySelector(".friendView")

export const friendsListComponent = () => {

  eventHub.addEventListener("loginButtonClicked", event => {

    const friends = useFriends()
  
    let activerUserFriends=friends.filter( ind => {
      return ind.activeUserId === parseInt(sessionStorage.getItem('activeUser'), 10)
    })
  
    contentTarget.innerHTML= activerUserFriends.map(friend => friendCardComponent(friend))
  
  })

  }
