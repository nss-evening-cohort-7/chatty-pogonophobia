const data = require('./data');

// const inputField = document.getElementById('inputField');
const inputKeypressEvent = document.getElementById('inputField');

// const inputEvents = () => {
//   inputField.addEventListener('keypress', pushData);
//   inputField.addEventListener('keypress', clearInput);
// };

const keyPress = () => {
  inputKeypressEvent.addEventListener('keypress', function (e) {
    const key = e.keyCode;
    if (key === 13) {
      data.pushData(e);
      inputKeypressEvent.innerHTML = '';
    }
  });
};

module.exports = {
  keyPress,
};
