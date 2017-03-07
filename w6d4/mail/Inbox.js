const Inbox = {
  render: () => {
    let message = document.createElement("ul");
    message.className = "messages";
    message.innerHTML = "An Inbox Message";
    return message;
  }
};

module.exports = Inbox;
