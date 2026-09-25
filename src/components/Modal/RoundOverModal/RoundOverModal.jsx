import React, { useContext } from 'react';
import { Title, Subtitle } from '../../../styles/General.styled';
import { ModalHeader, ModalBody, ModalFooter } from '../Modal.styled';
import Button from '../../Button/Button';
import { GameContext } from '../../../contexts/GameContext';
import { ModalContext } from '../../../contexts/ModalContext';


function RoundOverModal() {
  const { resetBoard, restartGame, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
        <ModalHeader>
          <Title text>{game.roundWinner.name ? `${game.roundWinner.name} wins round` : "Round drawn"}</Title>
        </ModalHeader>
        <ModalBody>
            <Subtitle text>Choices will be switched now.</Subtitle>
            <Subtitle text>{game.player1.name}: {game.player1.score}</Subtitle>
            <Subtitle text>{game.player2.name}: {game.player2.score}</Subtitle>
        </ModalBody>
        <ModalFooter>
            <Button style={{backgroundColor: "#eed785"}} onClick={() => { 
              handleModal(); 
              resetBoard() 
              }}>Continue
            </Button>
            <Button style={{backgroundColor: "#bb98f1"}} onClick={() => {
              handleModal(); 
              restartGame();
              }}>Restart
            </Button>
        </ModalFooter>
    </>
  )
}

export default RoundOverModal;
