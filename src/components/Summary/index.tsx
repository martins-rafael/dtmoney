import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export const Summary = () => (
  <Container>
    <div>
      <header>
        <p>Entrada</p>
        <img src={outcomeImg} alt="Saídas"/>
      </header>
      <strong>R$1000,00</strong>
    </div>

    <div>
      <header>
        <p>Saídas</p>
        <img src={incomeImg} alt="Entradas"/>
      </header>
      <strong>- R$300,00</strong>
    </div>

    <div className="highlight-background">
      <header>
        <p>Total</p>
        <img src={totalImg} alt="Total"/>
      </header>
      <strong>R$700,00</strong>
    </div>
  </Container>
);