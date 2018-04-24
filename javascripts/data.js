let messages = [];

const getMessages = () => {
  return messages;
};

const setMessages = (messageArray) => {
  messages = messageArray;
};

module.exports = {
  getMessages,
  setMessages,
};
