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
      <table>
        <thead>
          <th>
            <tr>
            <td>Dezembro/2022</td>
            <td>Segunda (05)</td>
            <td>Terça (06)</td>
            <td>Quarta (07)</td>
            <td>Quinta (08)</td>
            <td>Sexta (09)</td>
            </tr>
          </th>
        </thead>
        <tbody>
          <tr>
          <td>08h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>09h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <tr>
          <td>10h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <td>11h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <td>12h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <td>13h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <td>14h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <td>15h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <td>16h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
          <td>17h00</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        </tbody>
          
      </table>
      </main>
      `;

container.innerHTML = template;