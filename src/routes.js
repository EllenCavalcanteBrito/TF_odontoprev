import login from "../src/pages/login.js"
import register from "../src/pages/register.js"
import agendaDentista from "../src/pages/agenda-dentista.js";

const main = document.querySelector('#root');

const init = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case ' ':
      main.appendChild(login());
      break;
    case '#register':
      main.innerHTML = '';
      main.appendChild(register());
      break;

    case '#agendaDentista':
      main.innerHTML = '';
      main.appendChild(agendaDentista());
      break;

    default: main.appendChild(login());
  }
};

window.addEventListener('hashchange', () => {
  init();
});

window.addEventListener('load', () => {
  init();
});
