const data = require('./data');
const rebuildDom = require('./dom');

const clearMessagesBtn = document.getElementById('clearBtn');

const messageClear = () => {
  let allMessages = data.getMessages();
  allMessages = [];

  rebuildDom.printToDom(allMessages);
  return allMessages;
};

const addClearBtnEvent = () => {
  clearMessagesBtn.addEventListener('click', messageClear);
};

module.exports = addClearBtnEvent;
