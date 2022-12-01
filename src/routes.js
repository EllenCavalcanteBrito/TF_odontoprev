import login from "./pages/login/login.js"
import register from "./pages/register/register.js"
import patient from "./pages/patient/patient.js"
import dentistPage from "./pages/agendaDentista/dentistPage.js";
import warning from "./pages/patient/warning.js";
import headerPatient from "./pages/header/header_patient.js";
import headerDentist from "./pages/header/header_dentist.js";
import warningdentist from "./pages/agendaDentista/warningdentist.js";

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
      main.appendChild(headerPatient());
      main.appendChild(patient());
      break;
    case '#dentistPage':
      main.innerHTML = '';
      main.appendChild(headerDentist());
      main.appendChild(dentistPage());
      break;
    case '#warning':
      main.innerHTML = '';
      main.appendChild(headerPatient());
      main.appendChild(warning());
      break;
    case '#warningdentist':
      main.innerHTML = '';
      main.appendChild(headerPatient());
      main.appendChild(warningdentist());
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
