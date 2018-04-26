const dataGatekeeper = require('./dataGatekeeper');
const darkTheme = require('./darkThemeEvent');
const keyPressEvent = require('./keyPressEvent');
const clearButtonEvent = require('./messageClearEvent');

dataGatekeeper.initializer();
darkTheme();
dataGatekeeper.initializer();
keyPressEvent.keyPress();
clearButtonEvent();
