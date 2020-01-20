import { useNews } from "./NewsDP.js";
import { newsCardComponent } from "./News.js";
import { useFriends } from "../friends/FriendsDP.js";
import { newsFriendCardComponent } from "./NewsFriends.js";


// render events from API both users and friends, custom event for edit, delete eventHub

const contentTarget = document.querySelector(".articleList");
const eventHub = document.querySelector(".container")
const contentElement=document.querySelector(".articleFriends")

export const newsListComponent = () => {
    const news = useNews()
    const friends = useFriends()

    eventHub.addEventListener("click", event => {
        if (event.target.id.startsWith("editArticle--")){
            const [prefix, id] = event.target.id.split("--")
            const foundArticle = news.find( 
                (individualArticle) => {
                    return individualArticle.id === parseInt(id, 10)
                }
            )
            console.log("foundArticle", foundArticle)
            document.querySelector("#title").value = foundArticle.title 
            document.querySelector("#link").value = foundArticle.url
            document.querySelector("#summary").value = foundArticle.synopsis
        }

    } )

    eventHub.addEventListener("loginButtonClicked", event => {

        const render = () => {
          
            const articleUserArray = news.filter(
                article => {
                    return article.userId === parseInt(sessionStorage.getItem('activeUser'), 10)
                }
            ) 
            contentTarget.innerHTML = articleUserArray.map(art => newsCardComponent(art)).join("")
    
            // const html = newsCardComponent(articleUserArray)
            console.log(articleUserArray)
            // return html


            
        // filter through friends array to filter only active user's friends
            let activeUserFriendsArray=friends.filter(friend => {
              return friend.activeUserId === parseInt(sessionStorage.getItem('activeUser'), 10)})
              console.log(activeUserFriendsArray)



            contentElement.innerHTML=activeUserFriendsArray.map(friend => {

              const newsFriends=news.filter(article => article.userId===friend.userId)
              console.log(newsFriends)
              const html =newsFriends.map(art => newsFriendCardComponent(art)).join("")
              return html
             


            }).join("")

        
        }
        render()



    })

}