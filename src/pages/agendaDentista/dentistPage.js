export default () => {
  const container = document.createElement('div');
  
  const template = `
    <div class='patient-body'>
      <div id='form-options'>
        <img class='icon-calendar' src='./icon/icons8-calendar-64 (2).png' alt='icon calendar'>
        <p class='text'> Marque sua consulta 
        <br> ou veja seus agendamentos: </p>
        <button id='btScheduling'>Agendamentos</button>
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
  const btnScheduling = container.querySelector('#btScheduling');
  const db = firebase.firestore();


          function getScheduling (){
            const uidDentist = firebase.auth().currentUser.uid;
                db.collection('agenda').where('Status', '!=', 'Pendente','uidDentis', '==', uidDentist).get()
                .then(snapshot => {
                  const scheduling = []
                  snapshot.docs.forEach(doc => { 
                    scheduling.push(doc.data());
                    }) 
                    return scheduling       
                })
                .then(scheduling => {
                  containerDentist.innerHTML = scheduling.map((item) => {  
                  return `       
                  <div class='warning-body'>
                  <section class= 'container-warning'>
                    <div class='infos'>
                      <p class='txt-status'>Status da consulta:</p>
                      <div class='ipt-situation'>${item.Status}</div>
                      <p class='txt-status'>Data do agendamento: ${item.Date}</p>
                      <p class='txt-status'>Data do agendamento: ${item.Patient}</p>
                      <p class='warning'>Qualquer dúvida entre em contato <br>pelo site através do <a class='link' href='https://beneficiario.odontoprev.com.br/fale-conosco'>fale conosco.</a></p>
                    </div>
                    <div class='confirmation'>
                     <button class='btn-back'>Voltar</button>
                    </div>
                  </section>
                </div>    
              `;
                    })
                    .join('')
                })
              }
              
              btnScheduling.addEventListener('click', getScheduling)

        return container;
      };
