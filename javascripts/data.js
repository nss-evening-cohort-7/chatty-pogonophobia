const dom = require('./dom');

let messages = [];

const getMessages = () => {
  return messages;
};

const setMessages = (messageArray) => {
  messages = messageArray;
  dom.buildDomString(messages);
};

const pushData = (e) => {
  console.log(e);
  const inputVaule = document.getElementById('inputField').value;
  messages.push(inputVaule);
  console.log(messages);
};

module.exports = {
  getMessages,
  setMessages,
  pushData,
};
