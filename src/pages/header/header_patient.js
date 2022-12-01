export default () => {
  const containerHeaderPatient = document.createElement('div');
  const headerPatient = `
    <div class='patient-header'>
      <img class='logo-odontoprev' src='./logo/logo_odontoprev_branco_png.png' alt='odontoprev logo'>

      <div class='navbar'>
        <button id= 'btn-scheduling' class='btns-navbar'>Consultas</button>
        <button id= 'who' class='btns-navbar'>Quem somos</button>
        <button id= 'help' class='btns-navbar'>Ajuda</button>
        <button id= 'exit' class='btns-navbar'>Sair</button>
      </div>
    </div>
  `;

  containerHeaderPatient.innerHTML = headerPatient;

  const btnAgendar = containerHeaderPatient.querySelector('#btn-scheduling');
  btnAgendar.addEventListener('click', () => {
    window.location.hash = '#patient';
  });

  const btnWho = containerHeaderPatient.querySelector('#who');
  btnWho.addEventListener('click', () => {
    window.location.href =
      'https://www.odontoprev.com.br/quem-somos/nossa-estrutura';
  });

  const btnHelp = containerHeaderPatient.querySelector('#help');
  btnHelp.addEventListener('click', () => {
    window.location.href =
      'https://beneficiario.odontoprev.com.br/perguntas-frequentes';
  });

  const btnExit = containerHeaderPatient.querySelector('#exit');
  btnExit.addEventListener('click', () => {
    window.location.hash = '#login';
  });

  return containerHeaderPatient;
};
