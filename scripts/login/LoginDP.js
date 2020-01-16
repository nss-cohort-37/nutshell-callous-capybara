//  fetch GET users



export const getUser = (email) => fetch(`http://localhost:8088/users?email=${email}`)
.then(res => res.json())
.then(parsed => {return parsed})

let users =[]

export const useUsers =()=>users.slice() 
    
export const getUsers = () => fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(parsedusers => users = parsedusers)




export const saveUsers = user => {
      return fetch('http://localhost:8088/users', {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(user)
       })
       .then(getUsers)
     }



