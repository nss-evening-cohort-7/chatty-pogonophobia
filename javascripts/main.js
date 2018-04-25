const dataGatekeeper = require('./dataGatekeeper');
const keyPressEvent = require('./keyPressEvent');
const clearButtonEvent = require('./messageClearEvent');

dataGatekeeper.initializer();
keyPressEvent.keyPress();
clearButtonEvent();
