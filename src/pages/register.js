import {register} from "../data/authentication.js"

export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-register">
          <p>Faça seu registro</p>
          <div class="form-register">
            <input type="text" id="nameUser" placeholder="Digite seu nome" >
            <input type="email" id="emailUser" placeholder="Digite seu e-mail" > 
            <input type="password" id="passwordUser" placeholder="Digite sua senha" >
            <input type="password" id="confirmPassword" placeholder="Confirme sua senha" >
            </br>

              <p> 
                 <input type="radio" name="typeUser" required="required" value="beneficiario"/>
                 <label>Beneficiário</label>
                 <input type="radio" name="typeUser" required="required" value="Credenciado"/>
                 <label>Credenciado</label>                
              </p> 
            </br>
            
            <div id="print-error-here"></div> 

            <button type="button" class="buttons-register" id="button-register"> Criar conta </button>
          </div>
        </div>
      `;
      container.innerHTML = template;

      const buttonRegister = container.querySelector('#button-register');
      const inputEmail = container.querySelector('#emailUser');
      const inputNewPassword = container.querySelector('#confirmPassword');
      const inputPassword = container.querySelector('#passwordUser');
      const inputUserName = container.querySelector('#nameUser');
      const printError = container.querySelector('#print-error-here');
      const typeUser = container.querySelector('.typeUSer');

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

      return container;
};