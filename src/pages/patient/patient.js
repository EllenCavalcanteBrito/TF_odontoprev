export default () => {
  const container = document.createElement('div');
  
  const template = `
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
      <section class='containerDentists'></section>
    </div>
  `;
  
  container.innerHTML = template;

  const printAqui = container.querySelector('.containerDentists');
    const btnSelect = container.querySelector('#select-grid');
    const db = firebase.firestore();
    // 
    // console.log(userName);

    function getDentistas (){
          db.collection('users').where('profile', '==', 'Credenciado').get()
          .then(snapshot => {
            const dentistas = []
            snapshot.docs.forEach(doc => { 
              dentistas.push(doc.data());
              // console.log(doc.data())
              })       
              return dentistas       
          })
          .then(dentistas => {
            printAqui.innerHTML = dentistas.map((item) => {  
            return `       
          <div class='container-dentists'>
            <p class='info1'><img class='icon-people' src='./icon/usuario.png' alt='icon people'>Nome do profissional:${item.displayName}</p>
            <p class='info2'><img class='icon-document' src='./icon/document-writer.png' alt='icon document'>CNPJ:${item.data}</p>
            
            <div  id="btn-${item.user}">
            <button data-edit=${item.user}>Agendar consulta</button>
            </div>

            <div class="getAgenda" id="getAgenda-${item.user}" style="display:none"> 
            <input type="date" id="getData-${item.user}" value="2022-11-30" min="2022-11-30" max="2022-12-20"> 
            <input type="time" id="getHour-${item.user}" min="09:00" max="18:00">
            <button data-save=${item.user}>Ok</button>
            </div>

          </div>
                  `;
              });
          })
        }

        printAqui.addEventListener('click', (e) => {
          const botao = e.target.dataset.edit;
      
          if (botao) {
            printAqui.querySelector(`#getAgenda-${botao}`).removeAttribute('style');
            printAqui.querySelector(`#btn-${botao}`).style.display = 'none';
          }
        });

        printAqui.addEventListener('click', (e) => {
          const saveData = e.target.dataset.save;
      
          if (saveData) {
            const getData = printAqui.querySelector(`#getData-${saveData}`).value;
            const getHour = printAqui.querySelector(`#getHour-${saveData}`).value;
            const namePaciente = () => firebase.auth().currentUser.displayName;
            console.log(namePaciente());
            firebase.firestore().collection('users').doc(saveData).update({ Calendar: getData, Hour: getHour, Pacient: namePaciente()})
            .then(() => {
              printAqui.querySelector(`#getAgenda-${saveData}`).style.display = 'none';
              printAqui.querySelector(`#btn-${saveData}`).removeAttribute('style');
            })
          }
        });

          btnSelect.addEventListener('change', getDentistas)
        
        return container;
      };

    

