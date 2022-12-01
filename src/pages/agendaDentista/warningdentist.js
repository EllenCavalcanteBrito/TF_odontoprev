export default () => {
  const container = document.createElement('div');
  
  const template = `
    <div class='patient-body'>
      <div id='form-options'>
        <button id='btScheduling' class='btSchedulingw'>Consultas Pendentes</button>
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
                db.collection('agenda').where('uidDentist', '==', uidDentist).get()
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
                  <section class= 'dentist-warning-w'>
                    <div class='dentist-info'>
                      <p class='txt-dentist'>Status da consulta:</p>
                      <div class='ipt-situation'>${item.Status}</div>
                      <p class='txt-dentist'>Nome do beneficiário: ${item.Patient}</p>
                      <p class='txt-dentist'>Data do agendamento: ${item.Date}</p>
                      <p class='warning'>Qualquer informação entre em contato com <br> o beneficiário através do e-mail:<br> ${item.emailPatient} .</p>
                      <div class='btns'>
                        <button id='btnAcept' class='btnAcept'>Aceitar</button>
                        <button id='btnDeny' class='btnDeny'>Recusar</button>
                      </div>
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


    



    




    

