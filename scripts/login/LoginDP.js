let users =[]

export const useUsers =()=>users.slice() 

export const getUsers = (email) => fetch(`http://localhost:8088/users?email=${email}`)
    .then(res => res.json())
    .then(parsed => users = parsed)





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