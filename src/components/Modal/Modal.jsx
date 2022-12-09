import React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onBackdropClose, children }) => {
  return ReactDOM.createPortal(
    <Overlay
      initial={{
        opacity: 0,
        transition: {
          delay: 0.1,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.1,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.1,
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      }}
      onClick={e => onBackdropClose(e)}
    >
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
};


Modal.propTypes = {
  onBackdropClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};