import { useUsers } from "./LoginDP.js";

// listen for custom event that hyperlink has been clicked and render login form, 
// listens for custom event that login button was clicked 
// and then check username is in the user array and that the password matches with THAT username, 
// session storage activeID, renders main view of list 
const contentTarget = document.querySelector(".loginForm");
const eventHub = document.querySelector(".container")



export const LoginList = () => {
  
  const users = useUsers()
 
// refactor this for specific user 
  eventHub.addEventListener("loginButtonClicked", event => {
    const email = event.detail.email 
    console.log(email)
    const password = event.detail.password 
    console.log(password)
    const matchingEmailObject=users.find(user => {
      return user.email === email
    })
    console.log("matching object", matchingEmailObject)
    
// ask someone about incorrect username
    if (email === matchingEmailObject.email && password === matchingEmailObject.password){
      console.log("They Match")
      sessionStorage.setItem("activeUser", matchingEmailObject.id)
      console.log(matchingEmailObject.id)
      // go to main nutshell 
    }else if (email === matchingEmailObject.email) {
      console.log("Invalid Password!");
    } else {
      console.log("They don't")
    }
  })

  

}