const http = require('./messages');
const dataSet = require('./data');

function successXhr () {
  const data = JSON.parse(this.responseText).messages;
  dataSet.setMessages(data);
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
