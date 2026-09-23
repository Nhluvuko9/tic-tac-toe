import React from 'react';
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Button/Button';

function RoundOverModal() {
  return (
    <>
        <ModalHeader><Title>Zena wins this round!</Title></ModalHeader>
        <ModalBody>
            <Subtitle>Choices will be switched now.</Subtitle>
            <Subtitle>Zena: 1</Subtitle>
            <Subtitle>Kim: 1</Subtitle>
        </ModalBody>
        <ModalFooter>
            <Button color="#e4ce7b">Continue</Button>
            <Button color="#bb98f1">Restart</Button>
        </ModalFooter>
    </>
  )
}

export default RoundOverModal;
