const data = require('./data');

const clearMessagesBtn = document.getElementById('clearBtn');

const messageClear = () => {
  const allMessages = data.getMessages();
  allMessages.forEach((message) => {
    if (allMessages.length > 0) {
      allMessages.pop();
    }
  });

  console.log(allMessages);
  return allMessages;
};

const addClearBtnEvent = () => {
  clearMessagesBtn.addEventListener('click', messageClear);
};

module.exports = addClearBtnEvent;
