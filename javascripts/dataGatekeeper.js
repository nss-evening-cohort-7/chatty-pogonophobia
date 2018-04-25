const http = require('./messages');
const dataSet = require('./data');
const domEvents = require('./messageClearEvent');

function successXhr () {
  const data = JSON.parse(this.responseText).messages;
  dataSet.setMessages(data);
  domEvents();
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
