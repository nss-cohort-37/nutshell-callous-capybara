import { getMessages, saveMessages, useMessage, editMessages } from "./MessageDP.js";

// // input for the message and SEND MESSAGE button, date.now(), 
// send the custom event that send button clicked,
//  editButtonClicked listens to Custom Event




const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".messageForm");

export const messageComponent = ()=> {

    eventHub.addEventListener("click", event => {
        const updatedMessages = useMessage()
        if (event.target.id.startsWith("editMessage--")){
            const [prefix, id] = event.target.id.split("--")
            const foundMessage = updatedMessages.find( 
                (individualMessage) => {
                    return individualMessage.id === parseInt(id, 10)
                }
            )
            console.log("foundMessage", foundMessage)
            document.querySelector("#message").value = foundMessage.message
            document.querySelector("#messageId").value = foundMessage.id
        }
    })


    eventHub.addEventListener("click", event => {



        if (event.target.classList.contains("submitMessageButton")){
            const hiddenInputValue = document.querySelector("#messageId").value
            if(hiddenInputValue !== "") {
                const editedMessage = {
                    "id": parseInt(document.querySelector("#messageId").value, 10),
                    "message": document.querySelector("#message").value,
                    "date": Date.now(),
                    "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
                }
                editMessages(editedMessage).then(()=> {
                    eventHub.dispatchEvent(new CustomEvent ("messageHasBeenEdited"))
                })
            }
            
         else {
            const newMessage = {
                "message": document.querySelector("#message").value,
                "date": Date.now(),
                "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
                
            } 
            saveMessages(newMessage).then(() => {
              eventHub.dispatchEvent(new CustomEvent("messageCreated"))
        })
    }
    }})



const render = () => {
    contentTarget.innerHTML = `
      <fieldset>
      <label class="submitMessage" for="message">Message</label>
      <input type="text" name='message' id="message">
      <input type="hidden" name="messageId" id="messageId">     
      <button type="button" class="submitMessageButton">Send</button> 
      </fieldset>
    `;
  };
  render()

}