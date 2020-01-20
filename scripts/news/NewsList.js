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

    // const displayNews = (newsArray) => { 
    //     // only want it to render the edited article 
    //     contentTarget.innerHTML = `
    //     ${
    //         newsArray.map(article => { 
    //             return newsCardComponent(article)
    //         }).join("")
    //     }
    //     `
    // }

    // eventHub.addEventListener("articleCreated", event => {
    //     const createdArticle = useNews()
    //     displayNews(createdArticle)
    // })


    // eventHub.addEventListener("articleHasBeenEdited", event => {
    //     const updatedArticle = useNews()
    //     displayNews(updatedArticle)
    // })

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