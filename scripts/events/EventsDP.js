// fetch PUT, POST, DELETE
let events =[]

export const useEvents =()=>events.slice() 
    
export const getEvents = () => fetch("http://localhost:8088/events")
        .then(res => res.json())
        .then(parsedEvents => events = parsedEvents)




export const saveEvents = event => {
      return fetch('http://localhost:8088/events', {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(event)
       })
       .then(getEvents)
     }
     
     export const editEvents = (eventObject) => {
        return fetch(`http://localhost:8088/events/${eventObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        })
            .then(getEvents)
    
    }

