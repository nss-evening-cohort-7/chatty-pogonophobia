const checkbox = document.getElementById('largeText');

const addCheckBoxEventLarge = () => {
  checkbox.addEventListener('change', (e) => {
    const messagesBody = document.getElementById('messages');
    if (e.target.checked) {
      messagesBody.classList.add('largeMarge');
    }
    else {
      messagesBody.classList.remove('largeMarge');
    }
  });
};

module.exports = addCheckBoxEventLarge;
