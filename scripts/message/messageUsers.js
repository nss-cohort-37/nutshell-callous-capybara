
export const usersMessageComponent = (message) => {
    const contentTarget = document.querySelector(".editMessage")
    if ( message.userId === parseInt(sessionStorage.getItem('activeUser'), 10)){
        
        contentTarget.innerHTML = 
        `
        <button id="editMessage--${message.id}">Edit Message</button>
          `
    }
}