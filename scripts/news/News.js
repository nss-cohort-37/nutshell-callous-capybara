// news Card--, editButton, deleteButton, shows title, summary, url 
// (sort by descending date, friends should have cornsilk BG and italicized)

export const newsCardComponent = (articleArray) => {
    return `
    <hr/>
    <section class="articleCard">
      <h4 class="articleTitle">${articleArray.title}</h4>
      <div class="articleSynopsis">${articleArray.synopsis}</div>
      <div class="articleUrl">${articleArray.url}</div>
      <button id="editArticle--${articleArray.id}">Edit Article</button>
      </section>
      `
    }
    