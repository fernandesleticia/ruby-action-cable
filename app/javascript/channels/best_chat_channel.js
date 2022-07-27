import consumer from "./consumer"

consumer.subscriptions.create({ channel: "BestChatChannel", room: "Best Room" }, {
  received(data) {
    this.appendMessage(data)
  },

  appendMessage(data) {
    const html = this.createMessage(data)
    const element = document.querySelector("[data-best-chat='Best Room']")
    element.insertAdjacentHTML("beforeend", html)
  },

  createMessage(data) {
    return `
      <article class="chat-line">
        <span class="speaker">${data["sent_by"]}</span>
        <span class="body">${data["body"]}</span>
      </article>
    `
  }
});
