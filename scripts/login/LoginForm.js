// username, password, login button, custom event for login button clicked
import { saveUsers, getUser, getUsers, useUsers } from "./LoginDP.js";

// username, password, login button, custom event for login button clicked

const contentTarget = document.querySelector(".loginForm");
const eventHub = document.querySelector(".container")
export const loginComponent = () => {



  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("loginButton")) {
      const message = new CustomEvent ("loginButtonClicked", {
        detail: {
          email: document.querySelector("#email").value,
          password: document.querySelector("#passWord").value
        }
      })
      eventHub.dispatchEvent(message)
    }
    }) 

  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("registerNowButton")){
      const element = document.getElementById("registrationForm")
      element.classList.remove("hidden")
    }
  })
  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("registerNowButton")){
      const element = document.getElementById("loginButtons")
      element.classList.add("hidden")
    }
  })

  eventHub.addEventListener("click", event => {
    if (event.target.classList.contains("registerButton")){
      const email = document.querySelector("#email").value
      const password = document.querySelector("#passWord").value
      const confirmPassword = document.querySelector("#confirmPassword").value
      
      // makes sure unique email, passwords match and then post 

     getUser(email).then(
        result =>{
          if(result.length > 0 ){
            console.log("email taken ", result)
            // add prompt here 
            return
          }
          else if(result.length === 0 && password === confirmPassword)
          console.log(result)
          {
    
            const newUser = {
                          "email" : email,
                          "password" : password
          
                        }
          saveUsers(newUser)
          .then(getUsers).then(
            () =>{
                const users=useUsers()
                const newestUserObject=users.find(user=> {return user.email===email})
                console.log(newestUserObject)
                sessionStorage.setItem("activeUser", newestUserObject.id)
              }
              )
                  
                      //  .then(newUser =>{
                      //   
                      //  })
                      //  console.log(newUser)
          
              
              //  render main view 
              
            }
   
          }
      )

    }
  })




  const render = () => {
    contentTarget.innerHTML = `
      
      <fieldset>
        <label for="email">Email</label>
        <input type="text" name='email' id='email'>      
      </fieldset>
      <fieldset>
        <label for="passWord">Password</label>
        <input type="text" name='passWord' id='passWord'>      
      </fieldset>
      <fieldset id="registrationForm" class="hidden registration">
        <label for="confirmPassword">Password Confirmation</label>
        <input type="text" name='confirmPassword' id='confirmPassword'>   
        <button class="registerButton">Register</button>   
        </fieldset>
        <fieldset id="loginButtons">
        <button class="loginButton">Login</button> 
      <button class="registerNowButton">Sign Up</button>
        </fieldset>
    `;
  };
  render()
};



