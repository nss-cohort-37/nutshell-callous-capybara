// fetch GET, POST, DELETE


let friends = []

export const useFriends = () => friends.slice()

export const getFriends = () => fetch("http://localhost:8088/friends?_expand=user")
  .then(res => res.json())
  .then(parsedFriends => friends = parsedFriends)


export const deleteFriend = friendId => {
  return fetch(`http://localhost:8088/friends/${friendId}`, {
    method: "DELETE"
  })
    .then(getFriends)
}


export const saveFriends = friend => {
  return fetch('http://localhost:8088/friends', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(friend)
  })
    .then(getFriends)
}


