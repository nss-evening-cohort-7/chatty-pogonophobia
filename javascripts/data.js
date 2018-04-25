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
  messages.push(`{message:"${inputVaule}"}`);
  console.log(messages);
  dom.buildDomString(messages);
};

module.exports = {
  getMessages,
  setMessages,
  pushData,
};
