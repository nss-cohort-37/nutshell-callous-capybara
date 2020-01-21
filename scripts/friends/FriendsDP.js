// fetch GET, POST, DELETE


let friends=[]

export const useFriends=()=>friends.slice() 
    
export const getFriends= () => fetch("http://localhost:8088/friends?_expand=user")
        .then(res => res.json())
        .then(parsedFriends=> friends= parsedFriends)


export const deleteFriend = friendId =>{
                return fetch(`http://localhost:8088/friends/${friendId}`, {
                  method: "DELETE"
                })
                  .then(getFriends)
              }