import { useFriends, deleteFriend, saveFriends } from "./FriendsDP.js"
import { friendCardComponent } from "./Friends.js"
import { friendPreviewComponent } from "./FriendsPreview.js"
import { useUsers } from "../login/LoginDP.js"


// listens to custom event of the search values
// finds matching usernames, render in friend preview, 
// listens to add button custom event-- post to friends JSON, 
// // getFriends and render onto List (LIKE ITINERARY PREVIEW)


const eventHub = document.querySelector(".container")
const contentTarget=document.querySelector(".friendView")
const contentElement = document.querySelector(".friendPreviewList")

export const friendsListComponent = () => {

  eventHub.addEventListener("keypress", event => {
    if (event.target.id === "friendSearchBar"){
      if (event.key === "Enter"){
        const searchFriend = document.querySelector("#friendSearchBar").value
          const allUsers = useUsers()

         const matchingUser = allUsers.filter(user => {
            return user.email === searchFriend
          })
          console.log(matchingUser)
          contentElement.innerHTML = matchingUser.map(user => {
            return friendPreviewComponent(user)
          })
      }
    }
  })

  eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("addFriend--")){
      const allUsers = useUsers()
      // debugger
      const [prefix, id] = event.target.id.split("--")
      const newUserId = allUsers.filter(user => {
        return user.id === parseInt(id, 10)
      })
      console.log("new friend ID", newUserId)
      const neededUserId = newUserId.find(user => {
        return user
      })

      const newFriend = {
        "activeUserId": parseInt(sessionStorage.getItem('activeUser'), 10),
        "userId": neededUserId.id
      }
      saveFriends(newFriend).then(() => render(useFriends()) )
    }
  })

  const render = (friends) => {
    let activerUserFriends=friends.filter( ind => {
      return ind.activeUserId === parseInt(sessionStorage.getItem('activeUser'), 10)
    })
    console.log("active user friends", activerUserFriends)
  
    contentTarget.innerHTML= activerUserFriends.map(friend =>{
      return friendCardComponent(friend)
    }).join("")
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
