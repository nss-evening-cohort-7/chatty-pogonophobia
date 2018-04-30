const dataGatekeeper = require('./dataGatekeeper');
const darkTheme = require('./darkThemeEvent');
const keyPressEvent = require('./keyPressEvent');
const clearButtonEvent = require('./messageClearEvent');
const largeTextTheme = require('./largeTextTheme');
const edit = require('./deleteButtonEvent');

dataGatekeeper.initializer();
darkTheme();
largeTextTheme();
keyPressEvent.keyPress();
clearButtonEvent();
edit.editEventListener();
