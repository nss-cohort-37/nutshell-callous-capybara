// username, stock image, delete button, 
export const friendCardComponent = (friend) => {
  return `
  <section class="friendCard">
    <h4 class="friendUsername">Username:${friend.user.email}</h4>
    <div class="friendsStockPhoto"><img alt="imagePlaceholder" src=""></div>
    <button id="deleteFriend--${friend.id}">Delete Friend</button>
    </section>
    `
  }
  