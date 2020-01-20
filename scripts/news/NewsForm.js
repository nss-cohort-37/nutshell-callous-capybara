import { saveNews, editNews, useNews} from "./NewsDP.js";

// news form--title, summary, url, date.now() 
// add news button, editButtonClicked listens to Custom Event

const contentTarget = document.querySelector(".articleForm");
const eventHub = document.querySelector(".container")



export const articleComponent = () => {

  const news = useNews()
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



    eventHub.addEventListener("click", event => {
      if (event.target.classList.contains("submitArticleButton")) {
      
        const hiddenInputValue = document.querySelector("#articleId").value 

      if (hiddenInputValue != ""){

        const editedArticle = {
          "id": parseInt(document.querySelector("#articleId").value, 10),
          "title": document.querySelector("#title").value,
          "synopsis": document.querySelector("#summary").value,
          "url": document.querySelector("#link").value,
          "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
        }

        editNews(editedArticle).then(() => {
          eventHub.dispatchEvent(new CustomEvent("articleHasBeenEdited"))
        })

      } 
        else {  
          const newArticle = {
              "title": document.querySelector("#title").value,
              "synopsis": document.querySelector("#summary").value,
              "url": document.querySelector("#link").value,
              "userId": parseInt(sessionStorage.getItem('activeUser'), 10)
              
          } 
          saveNews(newArticle).then(() => {
            eventHub.dispatchEvent(new CustomEvent("articleCreated"))
          })
        }
    }}) 


    const render = () => {
        contentTarget.innerHTML = `
          
          <fieldset>
          
          <label for="title">Title</label>
          <input type="text" name='title' id='title'>      
          </fieldset>
          <fieldset>
            <input type="hidden" name="articleId" id="articleId">
            <label for="summary">Summary</label>
            <input type="text" name='summary' id='summary'>      
          </fieldset>
          <fieldset>
            <label for="link">Link</label>
            <input type="url" name='link' id='link'>      
          </fieldset>
          <fieldset id="submitArticle">
        <button type="button" class="submitArticleButton">Submit Article</button> 
        </fieldset>

        `;
      };
      render()
};
