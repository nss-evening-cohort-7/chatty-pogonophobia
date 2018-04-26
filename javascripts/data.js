const dom = require('./dom');

let messages = [];

const getMessages = () => {
  return messages;
};

const setMessages = (messageArray) => {
  messages = messageArray;
  dom.buildDomString(messages);
  console.log(messages);
};

const pushData = (e) => {
  console.log(e);
  const inputVaule = document.getElementById('inputField').value;
  const inputObject = {};
  inputObject.message = inputVaule;
  messages.push(inputObject);
  console.log(messages);
  const messageUpdated = getMessages();
  dom.printToDom(messageUpdated);
};

module.exports = {
  getMessages,
  setMessages,
  pushData,
};
