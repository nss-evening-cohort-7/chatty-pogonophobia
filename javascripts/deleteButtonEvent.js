const messageBtns = document.getElementsByClassName('deleteBtn');
const data = require('./data');
const dom = require('./dom');

const addMessageSelectionEventListeners = () => {
  for (let i = 0; i < messageBtns.length; i++) {
    messageBtns[i].addEventListener('click', (e) => {
      const messageId = grabId(e);
      removeArray(messageId);

    });
  }
};

const grabId = (e) => {
  const selectedMessageId = e.target.parentNode.dataset.messageId;
  return selectedMessageId;

};

const removeArray = (id) => {

  const messages = data.getMessages();
  messages.splice(id, 1);

  dom.printToDom(messages);
  addMessageSelectionEventListeners();
  data.setMessages(messages);

};

module.exports = {
  addMessageSelectionEventListeners,
};
