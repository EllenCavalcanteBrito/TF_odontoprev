
export default () => {
    const container = document.createElement('div');
    const template = `
    <div class='patient-header'>
        <img class='logo-odontoprev' src='./logo/logo_odontoprev_branco_png.png' alt='odontoprev logo'>
        <div class='navbar'>
          <button id= 'btn-scheduling' class='btns-navbar'>Agendar consultas </button>
          <button id= 'btn-patient-area' class='btns-navbar'>Área do paciente </button>
          <button id= 'who' class='btns-navbar'>Quem somos</button>
          <button id= 'help' class='btns-navbar'>Ajuda</button>
        </div>
    </div>
    <div class='patient-body'
        <div id='form-options'>
            <img class='icon-calendar' src='./icon/icons8-calendar-64 (2).png' alt='icon calendar'>
            <p> Marque sua consulta em poucos passos </p>
            <select name='rede-credenciada' id='select-grid'>
                <option value> Rede credenciada </option>
                <option value='Centro-Oeste'>Centro-Oeste</option>
                <option value='Nordeste'>Nordeste</option>
                <option value='Norte'>Norte</option>
                <option value='Sudeste'>Sudeste</option>
                <option value='Sul'>Sul</option>
            </select>
        </div>
        <section class= 'container-dentists' id=containerDentists>
        </section>
    </div>
    `;
      container.innerHTML = template;
      const patientArea = container.querySelector('#patient');
        window.location.href = '#patient';

        const btnWho = container.querySelector('#who');
        btnWho.addEventListener('click', () => {
            window.location.href = 'https://www.odontoprev.com.br/quem-somos/nossa-estrutura';
          });

        const btnHelp = container.querySelector('#help');
        btnHelp.addEventListener('click', () => {
            window.location.href = 'https://beneficiario.odontoprev.com.br/perguntas-frequentes';
          });

        return container;
      };

    
    
