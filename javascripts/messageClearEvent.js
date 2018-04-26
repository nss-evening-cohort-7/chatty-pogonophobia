const data = require('./data');
const rebuildDom = require('./dom');

const clearMessagesBtn = document.getElementById('clearBtn');

const messageClear = () => {
  data.setMessages([]);

  const allMessages = data.getMessages();

  rebuildDom.printToDom(allMessages);

  data.checkForMessages();
};

const addClearBtnEvent = () => {
  clearMessagesBtn.addEventListener('click', messageClear);
};

module.exports = addClearBtnEvent;
