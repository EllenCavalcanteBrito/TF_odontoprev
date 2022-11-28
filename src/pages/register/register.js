import {register} from "../../data/authentication.js"


export default () => {
    const container = document.createElement('div');
    const template = `
        <div class="register-body">
          <div class="register-infos">
            Odontoprev<br>
            <h1>Líder em planos odontológicos na América Latina.</h1>
            <h2>Junte-se aos mais de 8 milhões de beneficiários!</h2>
          </div>

          <div class="register-main">
            <form class="register-form">
              <input id="cpfCpnjUser" class="register-input" type="text" placeholder="CPF ou CNPJ" >
              <input id="nameUser" class="register-input" type="text" placeholder="Nome Completo" > 
              <input id="emailUser" class="register-input" type="email" placeholder="E-mail" >
              <input id="passwordUser" class="register-input" type="password" placeholder="Senha">

              <div class="register-input-radio">
                <input type="radio" name="typeUser" required="required" value="Beneficiário"/>
                <label>Beneficiário</label>
                <input id="registerInputCredenciado" type="radio" name="typeUser" required="required" value="Credenciado"/>
                <label>Credenciado</label>                
              </div>

              <input id="registerInputCro" class="register-input" type="text" placeholder="CRO"/>
            
              <div id="print-error-here"></div> 

              <button id="button-register" class="button-register" type="button">CADASTRAR</button>
            </form>
          </div>
        </div>
      `;
      container.innerHTML = template;

      const buttonRegister = container.querySelector('#button-register');
      const inputEmail = container.querySelector('#emailUser');
      const inputNewPassword = container.querySelector('#confirmPassword'); // não tera confirmação
      const inputPassword = container.querySelector('#passwordUser');
      const inputUserName = container.querySelector('#nameUser');
      const printError = container.querySelector('#print-error-here');
      const typeUser = container.querySelector('.typeUSer');
      const credenciado = container.querySelector('#registerInputCredenciado');

      function validatePassword() {
        if (inputUserName.value === '' || inputEmail.value === '' || inputPassword.value === '' || inputNewPassword.value === '') {
          printError.innerHTML = "Por favor, preencha todos os campos";
        } else if (inputPassword.value !== inputNewPassword.value) {
          printError.innerHTML = "A senha digitada está diferente em um dos campos.";
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

      // credenciado.addEventListener('click', () => {
      //   const showCredenciado = containerHeader.querySelector('#registerInputCro');
    
      //   if (showCredenciado.style.display === 'block') {
      //     showCredenciado.style.display = 'none';
      //   } else {
      //     showCredenciado.style.display = 'block';
      //   }
      // });

      return container;
};