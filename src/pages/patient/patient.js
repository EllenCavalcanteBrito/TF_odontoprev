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

  const containerDentist = container.querySelector('.containerDentists');
  const btnSelect = container.querySelector('#select-grid');
  const db = firebase.firestore();

    function getDentist (){
          db.collection('users').where('profile', '==', 'Credenciado').get()
          .then(snapshot => {
            const dentist = []
            snapshot.docs.forEach(doc => { 
              dentist.push(doc.data());
              })       
              return dentist       
          })
          .then(dentist => {
            containerDentist.innerHTML = dentist.map((item) => {  
            return `       
          <div class='container-dentists'>
            <p class='info1'><img class='icon-people' src='./icon/usuario.png' alt='icon people'>Nome do profissional:${item.displayName}</p>
            <p class='info2'><img class='icon-document' src='./icon/document-writer.png' alt='icon document'>CNPJ:${item.data}</p>
            
            <div  id="btn-${item.user}">
            <button data-confirm=${item.user}>Agendar consulta</button>
            </div>

            <div class="getAgenda" id="getAgenda-${item.user}" style="display:none"> 
            <input type="date" id="getDate-${item.user}" value="2022-11-30" min="2022-11-30" max="2022-12-20"> 
            <input type="time" id="getHour-${item.user}" min="09:00" max="18:00">
            <button data-save=${item.user}>Ok</button>
            </div>

          </div>
                  `;
              });
          })
        }
       
        containerDentist.addEventListener('click', (e) => {
          const btnConfirm = e.target.dataset.confirm;
      
          if (btnConfirm) {
            containerDentist.querySelector(`#getAgenda-${btnConfirm}`).removeAttribute('style');
            containerDentist.querySelector(`#btn-${btnConfirm}`).style.display = 'none';
          }
        });
        

        containerDentist.addEventListener('click', (e) => {
          const saveData = e.target.dataset.save;
      
          if (saveData) {

            const getDate = containerDentist.querySelector(`#getDate-${saveData}`).value;
            const getHour = containerDentist.querySelector(`#getHour-${saveData}`).value;
     
            const namePatient = firebase.auth().currentUser.displayName;
            const uidPatient = firebase.auth().currentUser.uid;

            firebase.firestore().collection('agenda')
            .add(
              { 
                Date: getDate, 
                Hour: getHour, 
                Status: 'Pendente', 
                uidDentist: saveData, 
                Patient: namePatient,
                uidPatient: uidPatient,
              })
            .then(() => {
              containerDentist.querySelector(`#getAgenda-${saveData}`).style.display = 'none';
              containerDentist.querySelector(`#btn-${saveData}`).removeAttribute('style');
            })
          }
        });

          btnSelect.addEventListener('change', getDentist)
        
        return container;
      };

    

