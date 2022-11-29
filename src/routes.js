import login from "./pages/login/login.js"
import register from "../pages/register/register.js"
import agendaDentista from "../pages/agendaDentista/agendaDentista.js";

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
      case '#patient':
      main.innerHTML = '';
      main.appendChild(patient());
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
