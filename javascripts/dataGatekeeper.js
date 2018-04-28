const http = require('./messages');
const dom = require('./dom');
const data2 = require('./data');
const deleteAction = require('./deleteButtonEvent');

function successXhr () {
  const data = JSON.parse(this.responseText).messages;
  data2.setMessages(data);
  dom.printToDom(data);
  deleteAction.addMessageSelectionEventListeners();
};

function failXhr () {
  console.log('errors on load');
};

const initializer = () => {
  http(successXhr, failXhr);
};

module.exports = {
  initializer,
};
