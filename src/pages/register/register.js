import { register } from '../../data/authentication.js';

export default () => {
  const container = document.createElement('div');
  const template = `
    <div class='register-body'>
      <div class='register-infos'>
        <img class='register-logo-blue' src='./logo/logo_odontoprev_azul_fundo_branco.jpg' alt='Logo odontoprev em azul'>
        <h1>Líder em planos odontológicos<br> na América Latina.</h1>
        <h2>Junte-se aos mais de 8 milhões de beneficiários!</h2>
      </div>

      <div class='register-main'>
        <form class='register-form'>
          <div class='register-input-radio'>
            <input id='registerInputBeneficiario' type='radio' name='typeUser' required='required' value='Beneficiário' checked/>
            <label>Beneficiário</label>
            <input id='registerInputCredenciado' type='radio' name='typeUser' required='required' value='Credenciado'/>
            <label>Credenciado</label>                
          </div>

          <div id='registerInputCro' class='register-cro'>
            <select class='btn-select-uf'>
              <option value='typeTitle' disabled selected style='display: none'>UF</option>
              <option value='AC'>AC</option>
              <option value='AL'>AL</option>
              <option value='AP'>AP</option>
              <option value='AM'>AM</option>
              <option value='BA'>BA</option>
              <option value='CE'>CE</option>
              <option value='DF'>DF</option>
              <option value='ES'>ES</option>
              <option value='GO'>GO</option>
              <option value='MA'>MA</option>
              <option value='MT'>MT</option>
              <option value='MS'>MS</option>
              <option value='MG'>MG</option>
              <option value='PA'>PA</option>
              <option value='PB'>PB</option>
              <option value='PR'>PR</option>
              <option value='PE'>PE</option>
              <option value='PI'>PI</option>
              <option value='RJ'>RJ</option>
              <option value='RN'>RN</option>
              <option value='RS'>RS</option>
              <option value='RO'>RO</option>
              <option value='RR'>RR</option>
              <option value='SC'>SC</option>
              <option value='SP'>SP</option>
              <option value='SE'>SE</option>
              <option value='TO'>TO</option>
            </select>
            <input id='registerInputNumberCro' class='register-input-cro' type='text' placeholder='Nº CRO' maxlength='4'/>
          </div>

          <input id='cpfCpnjUser' class='register-input' type='text' placeholder='CPF ou CNPJ' maxlength='14'/>
          <input id='nameUser' class='register-input' type='text' placeholder='Nome Completo'/> 
          <input id='emailUser' class='register-input' type='email' placeholder='E-mail' autocomplete='new-email'/>
          <input id='passwordUser' class='register-input' type='password' placeholder='Senha' autocomplete='new-password'/>
        
          <div id='print-error-here'></div> 

          <button id='button-register' class='button-register' type='button'>CADASTRAR</button>
        
          <div class='register-back-login'>Voltar para o <a href="#login" class='register-login'>Login</div>
        </form>
      </div>
    </div>
  `;

  container.innerHTML = template;

  const ASCII_CODE_0 = 48;
  const ASCII_CODE_9 = 57;
  const ASCII_CODE_EXCLAMATION = 33;
  const ASCII_CODE_ARROBA = 64;
  const beneficiario = container.querySelector('#registerInputBeneficiario');
  const buttonRegister = container.querySelector('#button-register');
  const credenciado = container.querySelector('#registerInputCredenciado');
  const inputData = container.querySelector('#cpfCpnjUser');
  const inputEmail = container.querySelector('#emailUser');
  const inputPassword = container.querySelector('#passwordUser');
  const inputUserName = container.querySelector('#nameUser');
  const printError = container.querySelector('#print-error-here');
  const showCredenciado = container.querySelector('#registerInputCro');
  const numberCro = container.querySelector('#registerInputNumberCro');

  function validatePassword() {
    if (
      !inputUserName.value ||
      !inputEmail.value ||
      !inputPassword.value ||
      !inputData.value ||
      (beneficiario.checked === false && credenciado.checked === false)
    ) {
      printError.innerHTML = 'Por favor, preencha todos os campos!';
    } else {
      const email = inputEmail.value;
      const password = inputPassword.value;
      const userName = inputUserName.value;
      const cpfCpnjUser = inputData.value;
      const getProfile = document.querySelector(
        'input[name="typeUser"]:checked'
      ).value;
      const getCro = numberCro.value;
      return register(email, password, userName)
        .then((userCredential) => {
          const user = userCredential.user;
          user.updateProfile({ displayName: userName });
          return firebase.firestore().collection('users').doc(user.uid).set({
            data: cpfCpnjUser,
            profile: getProfile,
            displayName: userName,
            user: user.uid,
            Cro: getCro,
          });
        })
        .then(() => {
          window.location.href = '#login';
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            printError.innerHTML =
              'E-mail já cadastrado.<br> Insira um e-mail diferente.';
          } else if (errorCode === 'auth/invalid-email') {
            printError.innerHTML = 'E-mail inválido';
          } else {
            printError.innerHTML =
              'Algo deu errado. Por favor, tente novamente.';
          }
        });
    }
  }

  buttonRegister.addEventListener('click', validatePassword);
  inputData.addEventListener('keypress', justNumber);
  credenciado.addEventListener('keypress', justNumber);
  numberCro.addEventListener('keypress', justNumber);
  inputUserName.addEventListener('keypress', blockNumber);

  credenciado.addEventListener('click', () => {
    showCredenciado.style.display = 'block';
  });

  beneficiario.addEventListener('click', () => {
    showCredenciado.style.display = 'none';
  });

  function justNumber(eventNumber) {
    const keyCode = eventNumber.keyCode;
    if (keyCode < ASCII_CODE_0 || keyCode > ASCII_CODE_9) {
      eventNumber.preventDefault();
    }
  }

  function blockNumber(eventName) {
    const keyCode = eventName.keyCode;
    if (keyCode > ASCII_CODE_EXCLAMATION && keyCode < ASCII_CODE_ARROBA) {
      eventName.preventDefault();
    }
  }

  return container;
};
