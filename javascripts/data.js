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

module.exports = {
  getMessages,
  setMessages,
};
