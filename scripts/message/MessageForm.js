import { getMessages, saveMessages, useMessage } from "./MessageDP.js";

// // input for the message and SEND MESSAGE button, date.now(), 
// send the custom event that send button clicked,
//  editButtonClicked listens to Custom Event




const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".messageForm");

export const messageComponent = ()=> {

    eventHub.addEventListener("click", event => {
        if (event.target.classList.contains("submitMessageButton")){

            const newMessage = {
                "message": document.querySelector("#message").value,
                "date": Date.now(),
                "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
                
            } 
            saveMessages(newMessage).then(() => {
              eventHub.dispatchEvent(new CustomEvent("messageCreated"))
            })
        }
    })



const render = () => {
    contentTarget.innerHTML = `
      <fieldset>
      <label for="message">Message</label>
      <input type="text" name='message' id="message">
      <input type="hidden" name="messageId" id="messageId">     
      <button type="button" class="submitMessageButton">Send</button> 
      </fieldset>
    `;
  };
  render()

}