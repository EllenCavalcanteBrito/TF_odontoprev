import {login} from "../../data/authentication.js";

export default () => {
    const container = document.createElement('div');
    const template = `  
    <div class="container-login">
      <div class="logo">
        <img src="./logo/logo_odontoprev_azul_fundo_branco.jpg" class="logo-login">
        <h1 class="msg-login">Faça seu login</h1>
      </div>
      <div class="form">
        <div>
          <label class="login-label" id="loginLabel" for="email">  
            <input id="inputEmail" class="inputEmail" type="email" placeholder=" E-mail" name="email" required>
          </label>
        </div>
          <input id="inputPassword" class="inputPassword" type="password" placeholder="Senha" name="password" required>
          <span id="recover" class"esqueci"><u>Esqueci a senha 😰</u></span>
          <button type="button" id="button-enter" class="button-enter">Entrar</button>
        <div id="print-error-here"></div> 
        <p>Não tem uma conta? <a href="#register" id="signUp" class="conta"> Cadastre-se! </p></div>
      </div>

    </div>
      `;

container.innerHTML = template;

const buttonEnter = container.querySelector('#button-enter');
const buttonRecover = container.querySelector('#recover');
const printError = container.querySelector('#print-error-here');
const inputEmail = container.querySelector('#inputEmail');
const inputPassword = container.querySelector('#inputPassword');
const signUp = container.querySelector('#signUp'); 

buttonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;
  login(email, password)
    .then((user) => {
      if (user.profile === "Beneficiário") {
        return alert("eu sou beneficiário")
      } else {
        alert ("não sou")
      }
      //window.location.href = "https://www.odontoprev.com.br/";
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

  buttonRecover.addEventListener('click', (event) => {
    event.preventDefault();
    const email = inputEmail.value;
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
      }).catch((error) => {
        const errorCode = error.code;
        if (errorCode) {
          printError.innerHTML = "Algo deu errado. Por favor, tente novamente.";
        }
      });
  });


return container;
};
