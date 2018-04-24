const outputDiv = document.getElementById('messages');

const printToDom = (string) => {
  outputDiv.innerHTML = string;
};

module.exports = printToDom;
