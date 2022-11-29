import {login} from "../data/authentication.js";
// import {showErrors} from "../../errors.js";

export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-login">
          <div class="form">
          <input id="inputEmail" type="email" placeholder="E-mail" name="email" required>
          <input id="inputPassword" type="password" placeholder="Senha" name="password" required>
          <button type="button" id="button-enter">Entrar</button>
          </div>

          <div id="print-error-here"></div> 

          <p>Não tem uma conta? <a href="#register" id="signUp"> Cadastre-se! </p>
        </div>
      `;

container.innerHTML = template;

const buttonEnter = container.querySelector('#button-enter');
const printError = container.querySelector('#print-error-here');
const inputEmail = container.querySelector('#inputEmail');
const inputPassword = container.querySelector('#inputPassword');
const signUp = container.querySelector('#signUp'); 

buttonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;
  login(email, password)
    .then(() => {
      window.location.href = '#patient';
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        printError.innerHTML = "Endereço de email não é válido";
      } else if (errorCode === 'auth/user-not-found') {
        printError.innerHTML = "Não há nenhum usuário correspondente ao e-mail fornecido.";
      } else if (errorCode === 'auth/wrong-password') {
        printError.innerHTML = "A senha é inválida para o e-mail fornecido.";
      } else {
        printError.innerHTML = "Algo deu errado. Por favor, tente novamente.";
      }
    });
});

signUp.addEventListener('click', () => {
    window.location.href = '#register';
  });

return container;
};
