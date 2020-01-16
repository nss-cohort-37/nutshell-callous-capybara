// username, password, login button, custom event for login button clicked
import { saveUsers, getUser } from "./LoginDP.js";

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
        (result) =>{
          if(result.length > 0 ){
            console.log("email taken ", result)
          }
          else if(result.length === 0 && password === confirmPassword){
    
            const newUser = {
                          "email" : email,
                          "password" : password
          
                        }
                       saveUsers(newUser)
                       .then(newUser =>{
                        sessionStorage.setItem("activeUser", newUser.id)
                       })
                       console.log(newUser)
          
              
              //  render main view 
              
            }
            // get the newUser that was added and get the id from it but really we need to find the email where they 
            
            
          }

        

      )
      




      // console.log(email)
      
      // for (const user of users) {
          
      //         if (user.email === email) {
      //           console.log("email is taken, sorry ")
      //         }else if(user.email !== email && password === confirmPassword ){
      //           // post array
      //           const newUser = {
      //             "email" : email,
      //             "password" : password
  
      //           }
              
      //           saveUsers(newUser)
      //           // use a fetch call 

      //           // take the id of response and save to session storage

      //         }
          
      // }
     
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



