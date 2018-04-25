const outputDiv = document.getElementById('messages');
const domEvents = require('./messageClearEvent');

const printToDom = (string) => {
  outputDiv.innerHTML = string;
  domEvents.addClearBtnEvents();
};

module.exports = printToDom;
