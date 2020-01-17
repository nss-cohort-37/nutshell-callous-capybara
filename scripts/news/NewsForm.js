import { saveNews } from "./NewsDP.js";

// news form--title, summary, url, date.now() 
// add news button, editButtonClicked listens to Custom Event

const contentTarget = document.querySelector(".articleForm");
const eventHub = document.querySelector(".container")



export const articleComponent = () => {

    eventHub.addEventListener("click", event => {
      if (event.target.classList.contains("submitArticleButton")) {
       
          
          const newArticle = {
              title: document.querySelector("#title").value,
              synopsis: document.querySelector("#summary").value,
              url: document.querySelector("#link").value,
              userId: parseInt(sessionStorage.getItem('activeUser'), 10)
              
          } 
          saveNews(newArticle)
        }
        }) 


    const render = () => {
        contentTarget.innerHTML = `
          
          <fieldset>
            <label for="title">Title</label>
            <input type="text" name='title' id='title'>      
          </fieldset>
          <fieldset>
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
