import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface MeuModalProps {
  show: boolean;
  handleClose: () => void;
  bio?: string;
}

const MeuModal: React.FC<MeuModalProps> = ({ show, handleClose, bio }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bio</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bio ? <p>{bio}</p> : <p>Não declarado</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MeuModal;
