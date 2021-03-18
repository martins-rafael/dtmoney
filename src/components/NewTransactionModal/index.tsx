import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      className="react-modal-close"
      type="button"
      onClick={onRequestClose}
    >
      <img src={closeImg} alt="Fechal modal" />
    </button>

    <Container>
      <h2>Cadastrar Transação</h2>

      <input type="text" placeholder="Título" />
      <input type="number" placeholder="Valor" />

      <TransactionTypeContainer>
        <button type="button">
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </button>

        <button type="button">
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
        </button>
      </TransactionTypeContainer>

      <input type="text" placeholder="Categoria" />

      <button type="submit">Cadastrar</button>
    </Container>
  </Modal>
);