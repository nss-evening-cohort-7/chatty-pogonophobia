const dataGatekeeper = require('./dataGatekeeper');
const darkTheme = require('./darkThemeEvent');
const keyPressEvent = require('./keyPressEvent');
const clearButtonEvent = require('./messageClearEvent');
const largeTextTheme = require('./largeTextTheme');

dataGatekeeper.initializer();
darkTheme();
largeTextTheme();
dataGatekeeper.initializer();
keyPressEvent.keyPress();
clearButtonEvent();
