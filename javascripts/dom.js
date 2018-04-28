const outputDiv = document.getElementById('messages');

const buildDomString = (messages) =>
{
  let domString = '';
  messages.forEach((message, index) => {
    domString += `<div data-message-id='${index}' class='messages'>`;
    domString +=  `<p>${message.message}  &nbsp;  <span class="btn btn-default glyphicon glyphicon-trash deleteBtn" aria-hidden="true"></span></p>`;
    domString +=  ``;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (string) => {
  outputDiv.innerHTML = buildDomString(string);

};

module.exports =
  {
    printToDom,
    buildDomString,
  };
