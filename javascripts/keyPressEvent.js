const data = require('./data');

const clearInput = () => {
  document.getElementById('inputField').value = '';
};

const inputKeypressEvent = document.getElementById('inputField');

const keyPress = () => {
  inputKeypressEvent.addEventListener('keypress', function (e) {
    const key = e.keyCode;
    if (key === 13) {
      data.pushData(e);
      clearInput();
    }
  });
};

module.exports = {
  keyPress,
};
