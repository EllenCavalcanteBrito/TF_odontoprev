export default () => {
    const container = document.createElement('div');
  
    const template = ` 
      <main>
            <div class='pending-body'
                <section class='containerPending'>
                </section>
            </div>
      </main>
    `;
  
    container.innerHTML = template;
  
    const printAqui = container.querySelector('.containerPending');
    const db = firebase.firestore();
    // 
    // console.log(userName);

    function getPending (){
          db.collection('users').where('profile', '==', 'Credenciado').get()
          .then(snapshot => {
            const pending = []
            snapshot.docs.forEach(doc => { 
                pending.push(doc.data());
              // console.log(doc.data())
              })       
              return pending       
          })
          .then(pending => {
            printAqui.innerHTML = pending.map((item) => {  
            return `       
                <div class='containerPending'>
                    <p class='info1'>Beneficiário: ${item.Pacient}</p>
                    <p>Data: ${item.Calendar}</p>
                    <p>Hora: ${item.Hour}</p>

                    <div id="btn">
                        <div  id="btnAcept-${item.user}">
                            <button data-acept=${item.user}></button>
                        </div>
                        <div  id="btnDeny-${item.user}">
                            <button data-deny=${item.user}></button>
                        </div>
                    </div>
                </div>
                  `;
              });
          })
        }

       /* const btnAcept = container.querySelector('#getAcept');
        const btnDeny = container.querySelector('#getDeny');

        printAqui.addEventListener('click', (e) => {
          const botao = e.target.dataset.save;
      
          if (botao) {
            const getAcept = printAqui.querySelector(`#getAcept-${botao}`).value;
            const getDeny = printAqui.querySelector(`#getDeny-${botao}`).value;
            const namePaciente = () => firebase.auth().currentUser.displayName;
            console.log(namePaciente());
            firebase.firestore().collection('users').doc(botao).update({ Calendar: getAcept, Hour: getDeny, Pacient: namePaciente()})
            .then(() => {
              printAqui.querySelector(`#getAgenda-${botao}`).style.display = 'none';
              printAqui.querySelector(`#btn-${botao}`).removeAttribute('style');
            })
          }
        });

          btnAcept.addEventListener('change', getPending)
          btnDeny.addEventListener('change', getPending) */

    return container;
  };
  