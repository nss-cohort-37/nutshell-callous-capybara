// username, message, edit button 

export const messageComponent = (message) => {
    if ( message.userId === parseInt(sessionStorage.getItem('activeUser'), 10)){

        return `
        <section class="activeUserMessageCard">
          <div class="userName">${message.user.email}</div>
          <div class="message">${message.message}</div>
          <div class="editMessage">
          <button id="editMessage--${message.id}">Edit Message</button>
          </div>
          </section>
          `
    }else {
        return `
        <section class="activeUserMessageCard">
          <div class="userName">${message.user.email}</div>
          <div class="message">${message.message}</div>
          </section>
          `
    }
    
    }