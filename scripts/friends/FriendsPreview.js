// friendsPreview Card username, stock photo, and add friend button, add button makes a custom event   
export const friendPreviewComponent = (friend) => {
    return `
    <section class="friendPreviewCard">
      <h4 class="friendUsername">${friend.email}</h4>
      <div class="friendsStockPhoto"><img alt="imagePlaceholder" src="carnival.png"></div>
      <button id="addFriend--${friend.id}">Add Friend</button>
      </section>
      `
    }