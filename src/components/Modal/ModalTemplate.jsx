import React, { useContext } from 'react'
import ReactDOM from 'react-dom';
import { ModalContext } from '../../contexts/ModalContext';
import { ModalBackdrop, ModalContainer } from './Modal.styled';


function ModalTemplate() {
    const { modalContext, modal } = useContext(ModalContext);

    if(modal) {
        return ReactDOM.createPortal(
            <ModalBackdrop><ModalContainer>{modalContext}</ModalContainer></ModalBackdrop>,
            document.getElementById('modal-root')
        );   
    }

    return null;
}

export default ModalTemplate
