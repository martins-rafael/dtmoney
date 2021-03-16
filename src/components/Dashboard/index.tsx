import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export const Dashboard = () => (
  <Container>
    <Summary />
    <TransactionsTable />
  </Container>
);