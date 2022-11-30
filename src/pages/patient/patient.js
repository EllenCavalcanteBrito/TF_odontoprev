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

  // const patientArea = container.querySelector('#patient');
  // window.location.href = '#patient';  
   
  const printDentists = container.querySelector('.containerDentists');
  const btnSelect = container.querySelector('#select-grid');

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
      console.log(dentistas)
      //map no dentista
      //depois criamos o card por html
    })
  }; 

  btnSelect.addEventListener('change', () => {
  return printDentists.innerHTML = `
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
