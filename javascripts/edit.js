// const data = require('./data');
// const dom = require('./dom');
// const delete2 = require('./deleteButtonEvent');

// const editButton = document.getElementsByClassName('edit');
// const saveButton = document.getElementsByClassName('save');

// const editEventListener = () => {
//   for (let i = 0; i < editButton.length; i++) {
//     editButton[i].addEventListener('click', editTarget);
//   };
// };

// const editTarget = (e) => {
//   console.log(e);
//   const targetID = e.target.parentNode.dataset.messageId;
//   console.log(targetID);
//   const targetText = e.target.parentNode.childNodes[0].innerText;
//   console.log(targetText);
//   const paragraghTarget = e.target.parentNode.childNodes[0];
//   paragraghTarget.innerHTML = `<input data-message-id='${targetID}' type="text" id="inputEdit" value="${targetText}"> <button class='save'>Save</button>`;
//   e.target.classList.add('hide');
//   e.target.parentNode.childNodes[2].classList.add('hide');
//   saveEvent();
// };

// const saveEvent = () => {
//   for (let i = 0; i < saveButton.length; i++) {
//     saveButton[i].addEventListener('click', editData);
//   };
// };

// const editData = (e) => {
//   console.log(e);
//   const inputValue = e.target.parentNode.childNodes[0].value;
//   const inputObject = {};
//   inputObject.message = inputValue;
//   const inputId = e.target.parentNode.childNodes[0].dataset.messageId;
//   console.log(inputObject);
//   editMessages(inputObject, inputId);
// };

// const editMessages = (inputObject, inputId) => {
//   const messageUpdated = data.getMessages();
//   console.log(messageUpdated);
//   messageUpdated[inputId] = inputObject;
//   console.log('updated',messageUpdated);
//   dom.printToDom(messageUpdated);
//   editEventListener();
//   delete2();
// };

// module.exports = {
//   editEventListener,
// };
