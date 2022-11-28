export default () => {
    const container = document.createElement('div');
    const template = `  <div class="container-register">
          <p>Faça seu registro</p>
        </div>
      `;
      container.innerHTML = template;
      return container;
};