import {login} from '../../data/authentication.js';

export default () => {
    const container = document.createElement('div');
    const template = `  
      <div class='container-login'>
        <div class='logo'>
          <img src='./logo/logo_odontoprev_azul_fundo_branco.jpg' class='logo-login'>
          <h1 class='msg-login'>Faça seu login</h1>
        </div>

        <form class='login-form'>
          <input id='inputEmail' class='inputEmail' type='email' placeholder='E-mail'/>
          <input id='inputPassword' class='inputPassword' type='password' placeholder='Senha'/>
          <span id='recover' class='esqueci'>Esqueci a minha senha</span>
          <button type='button' id='button-enter' class='button-enter'>Entrar</button>

          <div id='print-error-login'></div> 

          <div class='nconta'>
            <p>Não tem uma conta? <a href='#register' id='signUp' class='conta'>Cadastre-se!</p>
          </div>      
        </form>
      </div>
    `;

container.innerHTML = template;

const buttonEnter = container.querySelector('#button-enter');
const buttonRecover = container.querySelector('#recover');
const printError = container.querySelector('#print-error-login');
const inputEmail = container.querySelector('#inputEmail');
const inputPassword = container.querySelector('#inputPassword');
const signUp = container.querySelector('#signUp'); 

// inputEmail.value = '';
// inputPassword.value = ' ';

buttonEnter.addEventListener('click', (event) => {
  event.preventDefault();
  const email = inputEmail.value;
  const password = inputPassword.value;
  login(email, password)
    .then((user) => {
      if (user.profile === 'Beneficiário') {
        return window.location.href = '#patient';
      } else {
        alert('Página em contrução')
        return window.location.href = '#dentistPage';
      }
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        printError.innerHTML = 'Endereço de email não é válido';
      } else if (errorCode === 'auth/user-not-found') {
        printError.innerHTML = 'Não há nenhum usuário correspondente ao e-mail fornecido.';
      } else if (errorCode === 'auth/wrong-password') {
        printError.innerHTML = 'A senha é inválida para o e-mail fornecido.';
      } else {
        printError.innerHTML = 'Algo deu errado. Por favor, tente novamente.';
      }
    });
});

buttonRecover.addEventListener('click', (event) => {
  event.preventDefault();
  const email = inputEmail.value;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode) {
        printError.innerHTML = 'Algo deu errado. Por favor, tente novamente.';
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
          printError.innerHTML = 'Algo deu errado. Por favor, tente novamente.';
        }
      });
  });

return container;
};
