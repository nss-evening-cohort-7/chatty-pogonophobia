
const checkbox = document.getElementById('darkTheme');
const body = document.getElementById('body');

const addCheckBoxEvent = () =>
{
  checkbox.addEventListener('change', (e) =>
  {
    console.log(e);
    if (e.target.checked)
    {
      body.classList.add('venom');
    } else
    {
      body.classList.remove('venom');
    }
  });
};

module.exports = addCheckBoxEvent;
