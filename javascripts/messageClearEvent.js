const data = require('./data');
const allMessages = data.getMessages();

const clearMessagesBtn = document.getElementById('clearBtn');

const messageClear = () => {
  if (allMessages.length > 0) {
    allMessages.pop();
  }
  return allMessages;
};

const addClearBtnEvent = () => {
  clearMessagesBtn.addEventListener('click', messageClear());
};

module.exports = addClearBtnEvent;
