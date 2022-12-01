export default () => {
  const containerHeaderDentist = document.createElement('div');
  const headerDentist = `
    <div class='header-dentist'>
      <img class='logo-header-dentist' src='./logo/logo_odontoprev_branco_png.png' alt='odontoprev logo'>

      <div class='header-dentist-nav'>
        <button id='btn-header-scheduling' class='btns-nav'>Agendamentos</button>
        <button id='btn-header-pending' class='btns-nav'>Consultas pendentes</button>
        <button id='who-header-dentist' class='btns-nav''>Quem somos</button>
        <button id='help-header-dentist' class='btns-nav''>Ajuda</button>
        <button id='exit-header-dentist' class='btns-nav''>Sair</button>
      </div>
    </div>
  `;

  containerHeaderDentist.innerHTML = headerDentist;

  // const btnAgendar = containerHeaderDentist.querySelector('#btn-header-scheduling');
  // btnAgendar.addEventListener('click', () => {
  //   window.location.hash = '#dentistPage';
  // });

  // // const btnPending = containerHeaderDentist.querySelector('#btn-header-pending');
  // // btnPending.addEventListener('click', () => {
  // //   window.location.hash = '#pending';
  // // });

  // const btnWho = containerHeaderDentist.querySelector('#who');
  // btnWho.addEventListener('click', () => {
  //   window.location.href =
  //     'https://www.odontoprev.com.br/quem-somos/nossa-estrutura';
  // });

  // const btnHelp = containerHeaderDentist.querySelector('#help');
  // btnHelp.addEventListener('click', () => {
  //   window.location.href =
  //     'https://beneficiario.odontoprev.com.br/perguntas-frequentes';
  // });

  // const btnExit = containerHeaderDentist.querySelector('#exit');
  // btnExit.addEventListener('click', () => {
  //   window.location.hash = '#login';
  // });

  return containerHeaderDentist;
};
 