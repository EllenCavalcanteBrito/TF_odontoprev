export default () => {
    const container = document.createElement('div'); 
    const template = `
    <div class='warning-body'>
      <section class= 'container-warning'>
        <button class='btn-back'>Voltar</button>
        <button class='btn-look'>VER</button>
      </section>
    </div>   
        <section class='containerPatient'></section>
      </div>
    `;
    
    container.innerHTML = template;

    const containerPatient = container.querySelector('.containerPatient');
    const btnLook = container.querySelector('.btn-look');
    const db = firebase.firestore();

  function getPatient (){
    const uidPaciente = firebase.auth().currentUser.uid;
    db.collection('agenda').where('uidPaciente', '==', uidPaciente).get()
    .then(snapshot => {
      const schedulingDentist = []
      snapshot.docs.forEach(doc => { 
        schedulingDentist.push(doc.data());
        // console.log(doc.data())
        })       
        return schedulingDentist       
    })
    .then(schedulingDentist => {
      containerPatient.innerHTML = schedulingDentist.map((item) => {  
      return `       
    <div class='container-dentists'>
      <p class='info1'><img class='icon-people' src='./icon/usuario.png' alt='icon people'>Data de agendamento:${item.Calendar} às ${item.Hour} </p>
      <p class='info2'><img class='icon-document' src='./icon/document-writer.png' alt='icon document'>Status da consulta:${item.Status}</p>

    </div>
            `;
        });
    })
  }
 
  
  btnLook.addEventListener('click', getPatient)

  const btnBack = container.querySelector('.btn-back');
  btnBack.addEventListener('click', () => {
    window.location.hash = '#patient';
  });

  return container;
};
