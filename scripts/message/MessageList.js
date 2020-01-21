import { useMessage, getMessages } from "./MessageDP.js";
import { messageComponent } from "./Message.js";
import { usersMessageComponent } from "./messageUsers.js";

// render messages, listens to custom event that send button was clicked,
// posts to messages JSON, get messages and render with username, custom event for edit 
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".chatView");

export const messageListComponent = () => {

    eventHub.addEventListener("messageCreated", event => {
        const updatedMessages = useMessage()
        const render = () => {
            contentTarget.innerHTML = `
            ${
                updatedMessages.map(
                    singleMessage => {
                        return messageComponent(singleMessage)
                    }
                ).join("")
            }
            `
        }
        render()

    })


    eventHub.addEventListener("loginButtonClicked", event => {
        const messages = useMessage()
        

        const render = () => {
            contentTarget.innerHTML = `
            ${
                messages.map(
                    singleMessage => {
                        return messageComponent(singleMessage)
                    }
                ).join("")
            }
            `
        }
        render()
    })













}