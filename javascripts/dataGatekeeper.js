const http = require('./messages');

function successXhr () {
  const data = JSON.parse(this.responseText).messages;
  console.log(data);
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
