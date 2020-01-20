// fetch PUT, POST, DELETE
//  fetch GET news

// export const getUser = (email) => fetch(`http://localhost:8088/users?email=${email}`)
// .then(res => res.json())
// .then(parsed => {return parsed})

let news =[]

export const useNews =()=>news.slice() 
    
export const getNews = () => fetch("http://localhost:8088/news")
        .then(res => res.json())
        .then(parsedNews => news = parsedNews)




export const saveNews = article => {
      return fetch('http://localhost:8088/news', {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify(article)
       })
       .then(getNews)
     }
     
     export const editNews = (articleObject) => {
        return fetch(`http://localhost:8088/news/${articleObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObject)
        })
            .then(getNews)
    
    }


