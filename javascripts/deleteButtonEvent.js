const messageBtns = document.getElementsByClassName('deleteBtn');
const data = require('./data');
const dom = require('./dom');

const addMessageSelectionEventListeners = () => {
  for (let i = 0; i < messageBtns.length; i++) {
    messageBtns[i].addEventListener('click', (e) => {
      const messageId = grabId(e);
      removeArray(messageId);

    });
  }
};

const grabId = (e) => {
  const selectedMessageId = e.target.parentNode.dataset.messageId;
  return selectedMessageId;

};

const removeArray = (id) => {

  const messages = data.getMessages();
  messages.splice(id, 1);

  dom.printToDom(messages);
  addMessageSelectionEventListeners();
  data.setMessages(messages);
  editEventListener();
};

const editButton = document.getElementsByClassName('edit');
const saveButton = document.getElementsByClassName('save');

const editEventListener = () => {
  for (let i = 0; i < editButton.length; i++) {
    editButton[i].addEventListener('click', editTarget);
  };
};

const editTarget = (e) => {

  const targetID = e.target.parentNode.dataset.messageId;

  const targetText = e.target.parentNode.childNodes[0].innerText;

  const paragraghTarget = e.target.parentNode.childNodes[0];
  paragraghTarget.innerHTML = `<input data-message-id='${targetID}' type="text" id="inputEdit" value="${targetText}"> <button class='save'>Save</button>`;
  e.target.classList.add('hide');
  e.target.parentNode.childNodes[2].classList.add('hide');
  saveEvent();
};

const saveEvent = () => {
  for (let i = 0; i < saveButton.length; i++) {
    saveButton[i].addEventListener('click', editData);
  };
};

const editData = (e) => {

  const inputValue = e.target.parentNode.childNodes[0].value;
  const inputObject = {};
  inputObject.message = inputValue;
  const inputId = e.target.parentNode.childNodes[0].dataset.messageId;

  editMessages(inputObject, inputId);
};

const editMessages = (inputObject, inputId) => {
  const messageUpdated = data.getMessages();

  messageUpdated[inputId] = inputObject;

  dom.printToDom(messageUpdated);
  editEventListener();
  addMessageSelectionEventListeners();
};

module.exports = {
  addMessageSelectionEventListeners,
  editEventListener,
};
