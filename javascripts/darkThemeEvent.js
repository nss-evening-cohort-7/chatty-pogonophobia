
const checkbox = document.getElementById('darkTheme');
const body = document.getElementById('body');
const nav = document.getElementById('navbar');
const checkText = document.getElementById('label');
const checkText2 = document.getElementById('label2');
const pogonophobia = document.getElementById('title');
const messBoard = document.getElementById('messages');

const addCheckBoxEvent = () =>
{
  checkbox.addEventListener('change', (e) =>
  {
    console.log(e);
    if (e.target.checked)
    {
      body.classList.add('venom');
      nav.classList.add('venomNavbar');
      nav.classList.remove('navbar');
      checkText.classList.add('venomCheck');
      checkText2.classList.add('venomCheck');
      pogonophobia.classList.add('venomH1');
      messBoard.classList.add('venomBoard');
    } else
    {
      body.classList.remove('venom');
      nav.classList.remove('venomNavbar');
      nav.classList.add('navbar');
      checkText.classList.remove('venomCheck');
      checkText2.classList.remove('venomCheck');
      pogonophobia.classList.remove('venomH1');
      messBoard.classList.remove('venomBoard');
    }
  });
};

module.exports = addCheckBoxEvent;
