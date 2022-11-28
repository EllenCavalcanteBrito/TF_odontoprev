export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-login">
          <p>Holla!!</p>
          <p>Não tem uma conta? <a href="#register" id="signUp"> Cadastre-se! </p>
        </div>
      `;

container.innerHTML = template;

const signUp = container.querySelector('#signUp');      
signUp.addEventListener('click', () => {
    window.location.href = '#register';
  });

return container;
};
