let messages = [];

const pushData = (e) => {
  console.log(e);
  const inputVaule = document.getElementById('inputField').value;
  messages.push(inputVaule);
};

const getMessages = () => {
  return messages;
};

const setMessages = (messageArray) => {
  messages = messageArray;
};

module.exports = {
  getMessages,
  setMessages,
  pushData,
};
