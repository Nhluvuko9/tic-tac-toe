import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';



function RoundOverModal() {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
        <ModalHeader>
          <Title primary>{game.roundWinner.name ? `${game.roundWinner.name} wins this round` : "Round drawn"}</Title>
        </ModalHeader>
        <ModalBody>
            <Subtitle primary>Choices will be switched now.</Subtitle>
            <Subtitle primary>{game.player1.name}: {game.player1.score}</Subtitle>
            <Subtitle primary>{game.player2.name}: {game.player2.score}</Subtitle>
        </ModalBody>
        <ModalFooter>
            <Button color="#e4ce7b" onClick={() => { 
              handleModal(); 
              resetBoard() 
              }}>Continue
            </Button>
            <Button color="#bb98f1">Restart</Button>
        </ModalFooter>
    </>
  )
}

export default RoundOverModal;
