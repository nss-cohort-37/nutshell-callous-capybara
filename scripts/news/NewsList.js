import { useNews } from "./NewsDP.js";
import { newsCardComponent } from "./News.js";
import { useFriends } from "../friends/FriendsDP.js";

// render events from API both users and friends, custom event for edit, delete eventHub

const contentTarget = document.querySelector(".articleList");
const eventHub = document.querySelector(".container")

export const newsListComponent = () => {
    const news = useNews()
    const friends = useFriends()

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


            let friendArticleArray=[]
            

            let activeUserFriendsArray=friends.filter(friend => {return friend.activeUserId === parseInt(sessionStorage.getItem('activeUser'), 10)})

            activeUserFriendsArray.map(friend => {return friend.user.id})
           
            console.log(friendArticleArray)
            contentTarget.innerHTML = friendArticleArray.map( art => newsCardComponent(art)).join("")

            
        }
        render()



    })

}
