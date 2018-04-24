const outputDiv = document.getElementById('messages');

const domStringBuilder = () => {

};

const printToDom = (messagesArray) => {
  outputDiv.innerHTML = domStringBuilder(messagesArray);
};

module.exports = printToDom;
