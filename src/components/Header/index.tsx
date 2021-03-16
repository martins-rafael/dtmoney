import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export const Header = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button">
        Nova Transação
      </button>
    </Content>
  </Container>
);