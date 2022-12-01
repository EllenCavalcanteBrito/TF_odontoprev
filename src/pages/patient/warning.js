export default () => {
  const container = document.createElement("div");
  const template = `
    <div class='warning-body'>
      <section class='container-warning'>
        <button id='btnAgenda'>Status da consulta</button>
      </section>
    </div>  
  `;

  container.innerHTML = template;

  const containerDentist = container.querySelector(".container-warning");
  const btnScheduling = container.querySelector("#btnAgenda");
  const db = firebase.firestore();

  function getScheduling() {
    const uidPaciente = firebase.auth().currentUser.uid;
    db.collection("agenda")
      .where("uidPatient", "==", uidPaciente)
      .get()
      .then((snapshot) => {
        const scheduling = [];
        snapshot.docs.forEach((doc) => {
          scheduling.push(doc.data());
        });
        return scheduling;
      })
      .then((scheduling) => {
        containerDentist.innerHTML = scheduling.map((item) => {
          return `       
            <div class='warning-body'>
              <section class= 'container-warning'>
                <div class='infos'>
                  <p class='txt-status'>Status da consulta:</p>
                  <div class='ipt-situation'>${item.Status}</div>
                  <p class='txt-date'><b>Data do agendamento:<br> ${item.Date}</b></p>
                  <p class='warning'>Qualquer dúvida entre em contato pelo site <br>através do <a class='link' href='https://beneficiario.odontoprev.com.br/fale-conosco'>fale conosco.</a></p>
                </div>

                <button class='btn-reschedule'>Reagendar Consulta</button>
              </section>
            </div>    
          `;
        });
      });
  }

  btnScheduling.addEventListener("click", getScheduling);

  return container;
};
