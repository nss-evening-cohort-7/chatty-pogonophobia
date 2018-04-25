const outputDiv = document.getElementById('messages');

const buildDomString = (messages) =>
{
  let domString = '';
  messages.forEach((message, index) => {
    domString += `<div data-message-id='${index}' class='messages'>`;
    domString +=  `<p>${message.message}</p>`;
    domString +=  `<button class='deleteBtn'>Delete</button>`;
    domString += `</div>`;
  });
  return domString;
};

const checkForMessages = () => {
  const messageBoard = data.getMessages();
  if (messageBoard.length < 1) {
    clearMessagesBtn.disabled = true;
  }
};

const printToDom = (string) => {
  outputDiv.innerHTML = buildDomString(string);

};

module.exports =
  {
    printToDom,
    buildDomString,
  };
