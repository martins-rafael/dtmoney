import Modal from 'react-modal';

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
  >
    <h2>Cadastrar Transação</h2>
  </Modal>
);