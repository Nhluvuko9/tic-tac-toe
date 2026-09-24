import React, { useContext } from 'react'
import { CellStyle } from './GameCell.styled';
import { GameContext } from '../../contexts/GameContext';
import { checkForWinner } from '../../utils/GameUtils';
import { ModalContext } from '../../contexts/ModalContext';
import RoundOverModal from '../Modal/RoundOverModal/RoundOverModal';
import { ReactComponent as IconX } from '../../assets/cross-svgrepo-com-solid.svg';
import { ReactComponent as IconXOutline } from '../../assets/cross-svgrepo-com-outline2.svg';
import { ReactComponent as IconO } from '../../assets/circle-outline-of-small-size-svgrepo-com.svg';
import { ReactComponent as OIconOutline } from '../../assets/circle-circle-outline-svgrepo-com.svg';


function GameCell({ cellItem, index }) {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const handleCellClick = () => {
    updateBoard(index);
    const result = checkForWinner(game.board);

    if (result) {
      roundComplete(result);
      handleModal(<RoundOverModal />)
    }
  };

  if (cellItem === "x") {
    return (<CellStyle><IconX className="markedItem"/></CellStyle>)
  } else if (cellItem === "o") {
    return (<CellStyle><IconO className="markedItem"/></CellStyle>)
  }

  return (
    <CellStyle onClick={handleCellClick}>
      { game.turn === "x" ? <IconXOutline className="outlineIcon"/> : <OIconOutline className="outlineIcon"/> }
    </CellStyle>
  )
}

export default GameCell
