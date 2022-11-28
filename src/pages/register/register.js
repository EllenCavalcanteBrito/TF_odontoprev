import {register} from "../../data/authentication.js"


export default () => {
    const container = document.createElement('div');
    const template = `
        <div class="register-body">
          <div class="register-infos">
            <img class="register-logo-blue" src="./logo/logo_odontoprev_azul_fundo_branco.jpg" alt='Logo odontoprev em azul'>
            <h1>Líder em planos odontológicos na América Latina.</h1>
            <h2>Junte-se aos mais de 8 milhões de beneficiários!</h2>
          </div>

          <div class="register-main">
            <form class="register-form">
              <div class="register-input-radio">
                <input id="registerInputBeneficiario" type="radio" name="typeUser" required="required" value="Beneficiário"/>
                <label>Beneficiário</label>
                <input id="registerInputCredenciado" type="radio" name="typeUser" required="required" value="Credenciado"/>
                <label>Credenciado</label>                
              </div>

              <input id="registerInputCro" class="register-input-cro" type="text" placeholder="CRO" maxlength="6"/>

              <input id="cpfCpnjUser" class="register-input" type="number" placeholder="CPF ou CNPJ" >
              <input id="nameUser" class="register-input" type="text" placeholder="Nome Completo" > 
              <input id="emailUser" class="register-input" type="email" placeholder="E-mail" >
              <input id="passwordUser" class="register-input" type="password" placeholder="Senha">
            
              <div id="print-error-here"></div> 

              <button id="button-register" class="button-register" type="button">CADASTRAR</button>
            </form>
          </div>
        </div>
      `;
      container.innerHTML = template;

      const beneficiario = container.querySelector('#registerInputBeneficiario');
      const buttonRegister = container.querySelector('#button-register');
      const credenciado = container.querySelector('#registerInputCredenciado');
      const inputData = container.querySelector('#cpfCpnjUser');
      const inputEmail = container.querySelector('#emailUser');
      const inputPassword = container.querySelector('#passwordUser');
      const inputUserName = container.querySelector('#nameUser');
      const printError = container.querySelector('#print-error-here');
      const showCredenciado = container.querySelector('#registerInputCro');

      function validatePassword() {
        if (inputUserName.value === '' || inputEmail.value === '' || inputPassword.value === '' || inputData.value === '' ) {
          printError.innerHTML = "Por favor, preencha todos os campos";
        } else {
          const email = inputEmail.value;
          const password = inputPassword.value;
          const userName = inputUserName.value;
          return register(email, password, userName).then((userCredential) => {
            const user = userCredential.user;
            return user.updateProfile({ displayName: userName });
          })
            .then(() => {
              window.location.href = "https://www.odontoprev.com.br/";
            })
            .catch((error) => {
             const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            printError.innerHTML = "E-mail já cadastrado. Insira um e-mail diferente.";
          } else if (errorCode === 'auth/invalid-email') {
            printError.innerHTML = "E-mail inválido";
          } else {
            printError.innerHTML = "Algo deu errado. Por favor, tente novamente.";
          }
            });
        }
      }
    
      buttonRegister.addEventListener('click', validatePassword);

      credenciado.addEventListener('click', () => {        
        showCredenciado.style.display = 'block';
      });

      beneficiario.addEventListener('click', () => {
        showCredenciado.style.display = 'none';
      });

      return container;
};