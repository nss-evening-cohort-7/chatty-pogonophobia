const dom = require('./dom');

const clearMessagesBtn = document.getElementById('clearBtn');

let messages = [];

const checkForMessages = () => {
  const messageBoard = messages;
  if (messageBoard.length < 1) {
    clearMessagesBtn.disabled = true;
  } else {
    clearMessagesBtn.disabled = false;
  }
};

const getMessages = () => {
  return messages;
};

const setMessages = (messageArray) => {
  messages = messageArray;
  dom.buildDomString(messages);
};

const pushData = (e) => {
  const inputValue = document.getElementById('inputField').value;
  const inputObject = {};
  inputObject.message = inputValue;
  messages.push(inputObject);
  const messageUpdated = getMessages();
  dom.printToDom(messageUpdated);
  checkForMessages();
};

module.exports = {
  getMessages,
  setMessages,
  pushData,
  checkForMessages,
};
