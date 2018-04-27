const checkbox = document.getElementById('largeText');

const addCheckBoxEventLarge = () => {
  checkbox.addEventListener('change', (e) => {
    console.log('event',e);
    const messagesBody = document.getElementById('messages');
    if (e.target.checked) {
      console.log('checked',e);
      messagesBody.classList.add('largeMarge');
    }
    else {
      console.log('un-checked',e);
      messagesBody.classList.remove('largeMarge');
    }
  });
};

module.exports = addCheckBoxEventLarge;
