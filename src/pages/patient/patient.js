
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
          <button id= 'exit' class='btns-navbar'>Sair</button>
        </div>
    </div>
    <div class='patient-body'
        <div id='form-options'>
            <img class='icon-calendar' src='./icon/icons8-calendar-64 (2).png' alt='icon calendar'>
            <p class='text'> Marque sua consulta 
            <br> em poucos passos: </p>
            <select name='rede-credenciada' id='select-grid'>
                <option value> Rede credenciada </option>
                <option value='Centro-Oeste'>Centro-Oeste</option>
                <option value='Nordeste'>Nordeste</option>
                <option value='Norte'>Norte</option>
                <option value='Sudeste'>Sudeste</option>
                <option value='Sul'>Sul</option>
            </select>
        </div>
        <section class= 'containerDentists'>

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
    
    const btnExit = container.querySelector('#exit');
    btnExit.addEventListener('click', () => {
      window.location.hash = '#login';
    });
        const btnHelp = container.querySelector('#help');
        btnHelp.addEventListener('click', () => {
            window.location.href = 'https://beneficiario.odontoprev.com.br/perguntas-frequentes';
          });
          const printAqui = container.querySelector('.containerDentists');
          const btnSelect = container.querySelector('#select-grid');
          btnSelect.addEventListener('change', () => {
          return printAqui.innerHTML = `
          <div class='container-dentists'>
              <p class='info1'><img class='icon-people' src='./icon/usuario.png' alt='icon people'>Nome do profissional:</p>
              <p class='info2'><img class='icon-document' src='./icon/document-writer.png' alt='icon document'>CNPJ:</p>
              <p class='info3'><img class='icon-cro' src='./icon/document-identification.png' alt='icon cro'>CRO:</p>
          </div>
          `;
        });
        
        return container;
      };

    
     // const containerDentists = container.querySelector('#containerDentists');
      // containerDentists.appendChild(dentists);

