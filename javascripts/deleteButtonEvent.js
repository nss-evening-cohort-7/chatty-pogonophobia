const messageBtns = document.getElementsByClassName('deleteBtn');
const data = require('./data');

const addMessageSelectionEventListeners = () => {
  for (let i = 0; i < messageBtns.length; i++) {
    messageBtns[i].addEventListener('click', (e) => {
      const messageId = grabId(e);
      removeArray(messageId);

      console.log(messageId);

    });
  }
};

const grabId = (e) => {
  const selectedMessageId = e.target.parentNode.dataset.messageId;
  return selectedMessageId;

};

const removeArray = (id) => {
  const messages = data.getMessages();

  console.log('messages', messages);

};

module.exports = {
  addMessageSelectionEventListeners,
};
