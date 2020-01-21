// username, stock image, delete button, 
export const friendCardComponent = (friend) => {
  return `
  <section class="friendCard">
    <h4 class="friendUsername">Title:${friend.user.email}</h4>
    <div class="articleSynopsis">Synopsis:${friend.synopsis}</div>
    <div class="articleUrl">Url:${friend.url}</div>
    <button id="deleteFriend--${friend.id}">Edit Article</button>
    </section>
    `
  }
  