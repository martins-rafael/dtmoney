import { useEffect } from 'react';
import { Container } from './styles';

export const TransactionsTable = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de App</td>
            <td className="deposit">R$15.000</td>
            <td>Desenvolvimento</td>
            <td>16/03/2021</td>
          </tr>

          <tr>
            <td>X-Bacon</td>
            <td className="withdraw">-R$25</td>
            <td>Desenvolvimento</td>
            <td>10/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}