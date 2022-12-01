export default () => {
  const container = document.createElement("div");
  const template = `
    <div class='patient-body'>
      <div id='form-options'>
        <button id='btScheduling' class='btSchedulingw'>Consultas Pendentes</button>
      </div>
      <section class='containerDentists'></section>
    </div>
  `;

  container.innerHTML = template;

  const containerDentist = container.querySelector(".containerDentists");
  const btnScheduling = container.querySelector("#btScheduling");
  const db = firebase.firestore();

  function getScheduling() {
    const uidDentist = firebase.auth().currentUser.uid;
    db.collection("agenda")
      .where("uidDentist", "==", uidDentist)
      .get()
      .then((snapshot) => {
        const scheduling = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc)
          scheduling.push(doc);
        });
        return scheduling;
      })
      .then((scheduling) => {
        containerDentist.innerHTML = scheduling
          .map((item) => {
            const dados = item.data();
            return `       
            <div class='warning-body'>
              <section class= 'dentist-warning-w'>
                <div class='dentist-info'>
                  <p class='txt-dentist'>Status da consulta:</p>
                  <div class='ipt-situation'>${dados.Status}</div>
                  <p class='txt-dentist'>Nome do beneficiário: ${dados.Patient}</p>
                  <p class='txt-dentist'>Data do agendamento: ${dados.Date}</p>
                  <p class='warning'>Qualquer informação entre em contato com <br> o beneficiário através do e-mail:<br> ${dados.emailPatient} .</p>
                  <div class='btns'>
                  <button id='btnAcept' class='btnAcept' data-confirm=${item.id}>Aceitar</button>
                  <button id='btnDeny' class='btnDeny' data-cancel=${item.id}>Recusar</button>
                  </div>
                </div>
              </section>
            </div>    
          `;
          })
          .join("");
      });
  }

  containerDentist.addEventListener("click", (e) => {
    const status = e.target.dataset.confirm;
    const newStatus = status ? "Confirmado" : "Cancelado";

    if (status) {
      firebase.firestore().collection("agenda").doc(status).update({ Status: newStatus });
    }
  });

  containerDentist.addEventListener("click", (e) => {
      const status = e.target.dataset.cancel;
      const newStatus = status ? "Confirmado" : "Cancelado";

    if (status) {
      firebase.firestore().collection("agenda").doc(status).update({ Status: newStatus });   
    }
  });

  btnScheduling.addEventListener("click", getScheduling);

  return container;
};
