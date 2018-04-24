const http = require('./messages');
const domEvents = require('./messageClearEvent');

function successXhr () {
  const data = JSON.parse(this.responseText).messages;
  console.log(data);
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
