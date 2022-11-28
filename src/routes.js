import login from "./pages/login.js"
<<<<<<< HEAD
import register from "./pages/register/register.js"
=======
import register from "./pages/register.js"
>>>>>>> 07b2b3b16f90a474ebf687206a32c4b08b90d9fc

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

    default: main.appendChild(login());
  }
};

window.addEventListener('hashchange', () => {
  init();
});

window.addEventListener('load', () => {
  init();
});
