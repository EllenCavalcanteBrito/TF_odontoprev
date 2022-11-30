export default () => {
    const container = document.createElement('div');
    const template = `
    <div class='warning-body'>
        <section class= 'container-warning'>
            <button class='btn-back'>Voltar</button>
        </section>
    </div>    
     `
     container.innerHTML = template;
     const warningPage = container.querySelector('#warning');
     window.location.href = '#warning';

     const btnBack = container.querySelector('.btn-back');
    btnBack.addEventListener('click', () => {
      window.location.hash = '#patient';
    });
    return container
};