const http = require('./messages');
const dom = require('./dom');
const data2 = require('./data');

function successXhr () {
  const data = JSON.parse(this.responseText).messages;
  data2.setMessages(data);
  console.log(dom.printToDom(data));
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
