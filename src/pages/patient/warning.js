export default () => {
  const container = document.createElement('div');

  const template = `
    <div class='warning-body'>
      <section class= 'container-warning'>
        <div class='infos'>
          <p class='txt-status'>Status da consulta:</p>
          <div class='ipt-situation'></div>
          <p class='warning'>Qualquer dúvida entre em contato <br>pelo site através do <a class='link' href='https://beneficiario.odontoprev.com.br/fale-conosco'>fale conosco.</a></p>
        </div>
        <div class='confirmation'>
         <button class='btn-back'>Voltar</button>
        </div>
      </section>
    </div>    
  `;

  container.innerHTML = template;

  const warningPage = container.querySelector('#warning');
  window.location.href = '#warning';

  const btnBack = container.querySelector('.btn-back');
  btnBack.addEventListener('click', () => {
    window.location.hash = '#patient';
  });

  return container;
};
