import React, { useContext } from 'react'
import { Container } from '../../styles/General.styled';
import { GameBoardStyle, TurnTimer } from './Game.styled';
import GameCell from '../../components/GameCell/GameCell';
import { GameContext } from '../../contexts/GameContext';
import Player from '../../components/Player/Player';


 
function Game() {
  const { game, timeLeft } = useContext(GameContext);

  return (
    <Container>
      <Player player={game.player1} isPlayerActive={game.player1.choice === game.turn}/>
      <div>
        <TurnTimer>Time: {timeLeft}s</TurnTimer>
        <GameBoardStyle>
          {Object.values(game.board).map((item, index) => (
            <GameCell key={index} cellItem={item} index={index}/>
          ))}
        </GameBoardStyle>
      </div>
      <Player player={game.player2} isPlayerActive={game.player2.choice === game.turn}/>
    </Container>
  )
}

export default Game
