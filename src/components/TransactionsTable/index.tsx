import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export const TransactionsTable = () => {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data));
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