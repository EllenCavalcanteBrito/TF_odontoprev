// import {getScheduling} from "./Agendamento.js"

export default () => {
  const container = document.createElement("div");
  const template = `
    <div class='patient-body'>
      <div id='form-options'>
        <img class='icon-calendar' src='./icon/icons8-calendar-64 (2).png' alt='icon calendar'>
        <p class='patient-title'> Marque sua consulta<br> ou veja seus agendamentos: </p>

        <button id='btScheduling'>Agendamentos</button>

        <select name='rede-credenciada' id='select-grid'>
          <option>Rede credenciada</option>
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

  const containerDentist = container.querySelector(".containerDentists");
  const btnSelect = container.querySelector("#select-grid");
  const btnScheduling = container.querySelector("#btScheduling");
  const db = firebase.firestore();

  function getDentist() {
    db.collection("users")
      .where("Profile", "==", "Credenciado")
      .get()
      .then((snapshot) => {
        const dentist = [];
        snapshot.docs.forEach((doc) => {
          dentist.push(doc.data());
        });
        return dentist;
      })
      .then((dentist) => {
        containerDentist.innerHTML = dentist
          .map((item) => {
            return `       
              <div class='container-dentists'>
                <div class='txt-dentists'>
                  <div class='info1'><img class='icon-people' src='./icon/usuario.png' alt='icon people'>Dentista: ${item.DisplayName}</div>
                  <div class='info2'><img class='icon-document' src='./icon/document-writer.png' alt='icon document'>CNPJ: ${item.Data}</div>
                </div>
                
                <div class='avaliable-text'>
                  <p class='txt'>Agenda disponível</p>
                </div>

                <div class='avaliable'>
                  <input type='radio' name='data-hora-${item.user}'  id="getDate1-${item.user}" class='select-avaliable' value='05/12/2022 - 09:00h'>05/12/2022 - 09:00h</input><br>
                  <input type='radio' name='data-hora-${item.user}'  id="getDate2-${item.user}" class='select-avaliable' value='06/12/2022 - 15:00h'>06/12/2022 - 15:00h</input><br>
                  <input type='radio' name='data-hora-${item.user}'  id="getDate3-${item.user}" class='select-avaliable' value='07/12/2022 - 08:45h'>07/12/2022 - 08:45h</input><br>
                </div>

                <div class='btn-mark'>
                  <button class= 'btnMark' data-confirm=${item.user}>AGENDAR CONSULTA</button>
                </div>
              </div>
            `;
          })
          .join("");
      });
  }

  containerDentist.addEventListener("click", (e) => {
    const confirmUid = e.target.dataset.confirm;

    if (confirmUid) {
      //  const getDate = document.querySelectorAll("input[name='data-hora']").forEach((input) => {
      //     input.addEventListener('change', function(){
      //     console.log(this.value);
      //     });
      //   });

      const getDate1 = containerDentist.querySelector(
        `#getDate1-${confirmUid}`
      ).value;
      // const getDate2 = containerDentist.querySelector(`#getDate2-${confirmUid}`).value;
      // const getDate3 = containerDentist.querySelector(`#getDate3-${confirmUid}`).value;

      const namePatient = firebase.auth().currentUser.displayName;
      const uidPatient = firebase.auth().currentUser.uid;
      const emailPatient = firebase.auth().currentUser.email;

      firebase.firestore().collection("agenda").add({
        Date: getDate1,
        Status: "Pendente",
        uidDentist: confirmUid,
        Patient: namePatient,
        emailPatient: emailPatient,
        uidPatient: uidPatient,
      });
    }
  });

  btnSelect.addEventListener("change", getDentist);

  function getScheduling() {
    const uidPatient = firebase.auth().currentUser.uid;
    db.collection("agenda")
      .where("uidPatient", "==", uidPatient)
      .get()
      .then((snapshot) => {
        const scheduling = [];
        snapshot.docs.forEach((doc) => {
          scheduling.push(doc.data());
        });
        return scheduling;
      })
      .then((scheduling) => {
        containerDentist.innerHTML = scheduling
          .map((item) => {
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
          })
          .join("");
      });
  }

  btnScheduling.addEventListener("click", getScheduling);

  return container;
};
