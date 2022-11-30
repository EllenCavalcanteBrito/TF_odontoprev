export default () => {
  const containerHeader = document.createElement('div');

  const header = `
    <div class='patient-header'>
      <img class='logo-odontoprev' src='./logo/logo_odontoprev_branco_png.png' alt='odontoprev logo'>

      <div class='navbar'>
        <button id= 'btn-scheduling' class='btns-navbar'>Agendar consultas </button>
        <button id= 'btn-warning' class='btns-navbar'>Avisos </button>
        <button id= 'who' class='btns-navbar'>Quem somos</button>
        <button id= 'help' class='btns-navbar'>Ajuda</button>
        <button id= 'exit' class='btns-navbar'>Sair</button>
      </div>
    </div>
  `;

  containerHeader.innerHTML = header;

  const btnWho = containerHeader.querySelector('#who');
  btnWho.addEventListener('click', () => {
    window.location.href =
      'https://www.odontoprev.com.br/quem-somos/nossa-estrutura';
  });

  const btnExit = containerHeader.querySelector('#exit');
  btnExit.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  const btnHelp = containerHeader.querySelector('#help');
  btnHelp.addEventListener('click', () => {
    window.location.href =
      'https://beneficiario.odontoprev.com.br/perguntas-frequentes';
  });

  const btnWarning = containerHeader.querySelector('#btn-warning');
  btnWarning.addEventListener('click', () => {
    window.location.hash = '#warning';
  });

  return containerHeader;
};
