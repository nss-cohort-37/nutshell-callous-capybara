// fetch GET messages, POST, PUT, 

let messages =[]

    
export const getMessages = () => fetch("http://localhost:8088/messages?_expand=user")
        .then(res => res.json())
        .then(parsedMessages => messages = parsedMessages)

export const saveMessages = message => {
      return fetch('http://localhost:8088/messages', {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(message)
       })
       .then(getMessages)
     }


export const useMessage = () => {
        const sortedByDate = messages.sort(
            (currentMessage, nextMessage) =>
                Date.parse(currentMessage.date) - Date.parse(nextMessage.date)
        )
        return sortedByDate
      }


export const editMessages = (messageObject) => {
        return fetch(`http://localhost:8088/messages/${messageObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObject)
        })
            .then(getMessages)
    
    }