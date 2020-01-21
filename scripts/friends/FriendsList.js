import { useFriends, deleteFriend } from "./FriendsDP.js"
import { friendCardComponent } from "./Friends.js"

// listens to custom event of the search values
// finds matching usernames, render in friend preview, 
// listens to add button custom event-- post to friends JSON, 
// // getFriends and render onto List (LIKE ITINERARY PREVIEW)


const eventHub = document.querySelector(".container")
const contentTarget=document.querySelector(".friendView")

export const friendsListComponent = () => {

  const render = (friends) => {
    let activerUserFriends=friends.filter( ind => {
      return ind.activeUserId === parseInt(sessionStorage.getItem('activeUser'), 10)
    })

    contentTarget.innerHTML= activerUserFriends.map(friend => friendCardComponent(friend)).join("")
  
  }
  eventHub.addEventListener("loginButtonClicked", event => {
    const friends = useFriends()
    render(friends)
  
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteFriend--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
      
        deleteFriend(id).then(() => render(useFriends()) )
    }
})

  }
