// username, stock image, delete button, 
export const friendCardComponent = (friend) => {
  return `
  <section class="friendCard">
    <h4 class="friendUsername">${friend.user.email}</h4>
    <div class="friendsStockPhoto"><img alt="imagePlaceholder" src="carnival.png"></div>
    <button id="deleteFriend--${friend.id}">Delete Friend</button>
    </section>
    `
  }
  