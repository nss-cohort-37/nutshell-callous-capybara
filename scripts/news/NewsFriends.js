export const newsFriendCardComponent = (articleArray) => {
    return `
    <hr/>
        <section class="friendArticleCard">
          <h4 class="articleTitle">Title:${articleArray.title}</h4>
          <div class="articleSynopsis">Synopsis:${articleArray.synopsis}</div>
          <div class="articleUrl">Url:${articleArray.url}</div>
        </section>
      `
    }
    