export default () => {
    const container = document.createElement('div');
    const template = ` 
      <header>
        <figure>
        </figure>

        <nav>
          <p>Consultas agendadas</p>
          <p>Consultas pendentes</p>
          <p>Quem somos</p>
          <p>Ajuda</p>
        </nav>
      </header>
      
      <main>
      <table id="tb">
        <thead>
          <th>
            <tr>
            <td>Dezembro/2022</td>
            <td rowspan="2">Segunda-feira (05)</td>
            <td rowspan="2">Terça-feira (06)</td>
            <td rowspan="2">Quarta-feira (07)</td>
            <td rowspan="2">Quinta-feira (08)</td>
            <td rowspan="2">Sexta-feira (09)</td>
            </tr>
          </th>
        </thead>

        <tbody>
          <tr>
          <td>08h00</td>
          <option id="seg-08h"></option>
          <option id="ter-08h"></option>
          <option id="qua-08h"></option>
          <option id="qui-08h"></option>
          <option id="sex-08h"></option>
          </tr>
          <tr>
          <td>09h00</td>
          <option id="seg-09h"></option>
          <option id="ter-09h"></option>
          <option id="qua-09h"></option>
          <option id="qui-09h"></option>
          <option id="sex-09h"></option>
          </tr>
          <tr>
          <td>10h00</td>
          <option id="seg-10h"></option>
          <option id="ter-10h"></option>
          <option id="qua-10h"></option>
          <option id="qui-10h"></option>
          <option id="sex-10h"></option>
          </tr>
          <td>11h00</td>
          <option id="seg-11h"></option>
          <option id="ter-11h"></option>
          <option id="qua-11h"></option>
          <option id="qui-11h"></option>
          <option id="sex-11h"></option>
          </tr>
          <td>12h00</td>
          <option id="seg-12h"></option>
          <option id="ter-12h"></option>
          <option id="qua-12h"></option>
          <option id="qui-12h"></option>
          <option id="sex-12h"></option>
          </tr>
          <td>13h00</td>
          <option id="seg-13h"></option>
          <option id="ter-13h"></option>
          <option id="qua-13h"></option>
          <option id="qui-13h"></option>
          <option id="sex-13h"></option>
          </tr>
          <td>14h00</td>
          <option id="seg-14h"></option>
          <option id="ter-14h"></option>
          <option id="qua-14h"></option>
          <option id="qui-14h"></option>
          <option id="sex-14h"></option>
          </tr>
          <td>15h00</td>
          <option id="seg-15h"></option>
          <option id="ter-15h"></option>
          <option id="qua-15h"></option>
          <option id="qui-15h"></option>
          <option id="sex-15h"></option>
          </tr>
          <td>16h00</td>
          <option id="seg-16h"></option>
          <option id="ter-16h"></option>
          <option id="qua-16h"></option>
          <option id="qui-16h"></option>
          <option id="sex-16h"></option>
          </tr>
          <td>17h00</td>
          <option id="seg-17h"></option>
          <option id="ter-17h"></option>
          <option id="qua-17h"></option>
          <option id="qui-17h"></option>
          <option id="sex-17h"></option>
          </tr>
        </tbody>
          
      </table>
      </main>
      `;

container.innerHTML = template;

function nome (nome) { // confirmar com barbara
  const tbAgendamento = document.getElementById("tb");
  const qtDeHorarios = ["08h", "09h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h"]

  const horario = linha.insertCell(0);
  const segunda = linha.insertCell(1);
  const terça = linha.insertCell(2);
  const quarta = linha.insertCell(3);
  const quinta = linha.insertCell(4);
  const sexta = linha.insertCell(5);

  horario.innerHTML = qtDeHorarios;
  segunda.innerHTML = nome;

}
return container;
}