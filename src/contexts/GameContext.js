import { createContext, useEffect, useState } from "react";
import { genConfig } from 'react-nice-avatar';

const newGame = () => ({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
        choice: "x",
        name: "Zena",
        score: 0,
        color: "#bb98f1",
        avatarConfig: genConfig()
    },
    player2: {
        choice: "o",
        name: "Kim",
        score: 0,
        color: "#e4ce7b",
        avatarConfig: genConfig()
    },
    turn: "x",
    roundWinner: ""
})

export const GameContext = createContext({});
const TURN_TIME = 10;

export const GameContextProvider = (props) => {
    const [timeLeft, setTimeLeft] = useState(TURN_TIME);
    const [game, setGame] = useState(newGame);
    

    
    // const [game, setGame] = useState({
    //     board: [null, null, null, null, null, null, null, null, null],
    //     player1: {
    //         choice: "x",
    //         name: "Zena",
    //         score: 0,
    //         color: "#bb98f1",
    //         avatarConfig: genConfig()
    //     },
    //     player2: {
    //         choice: "o",
    //         name: "Kim",
    //         score: 0,
    //         color: "#e4ce7b",
    //         avatarConfig: genConfig()
    //     },
    //     turn: "x",
    //     roundWinner: ""
    // });

    useEffect(() => {
        const roundIsOver = Boolean(game.roundWinner) || game.board.every(cell => cell !== null);

        if (roundIsOver) {
            setTimeLeft(0);
            return;
        }

        setTimeLeft(TURN_TIME);

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    setGame(prevGame => ({
                        ...prevGame,
                        turn: prevGame.turn === "x" ? "o" : "x"
                    }));
                    return TURN_TIME;
                }

                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [game.board, game.roundWinner, game.turn]);

    const updateBoard = (index) => {
        const updatedBoard = [...game.board];
        updatedBoard[index] = game.turn;
        setGame({
            ...game,
            board: updatedBoard,
            turn: game.turn === "x" ? "o" : "x"
        });
    };

    const resetBoard = (index) => {
        setGame({
            ...game,
            board: [null, null, null, null, null, null, null, null, null],
            roundWinner: "",
        })
    }

    const toggleChoice = (choice) => choice === "x" ? "o" : "x";

    const switchTurn = () => {
        setGame(prevGame => ({
            ...prevGame,
            player1: {
                ...prevGame.player1,
                choice: toggleChoice(prevGame.player1.choice)
            },
            player2: {
                ...prevGame.player2,
                choice: toggleChoice(prevGame.player2.choice)
            }
        }))
    }

    const updateScore = (winner) => {
        if(winner === "draw") {
            setGame(prevGame => ({
                ...prevGame,
                player1: {
                    ...prevGame.player1,
                    score: prevGame.player1.score + 0.5,
                },
                player2: {
                    ...prevGame.player2,
                    score: prevGame.player2.score + 0.5,
                },
                roundWinner: "",
            }));
        } else {
            setGame(prevGame => ({
                ...prevGame,
                [winner]: {
                    ...prevGame[winner],
                    score: prevGame[winner].score + 1,
                },
                roundWinner: prevGame[winner],
            }));
        }
    }

    const roundComplete = (result) => {
        if (game.turn === game.player1.choice && result !== "draw") {
            updateScore("player1")
        } else if (result !== "draw") {
            updateScore("player2")
        } else {
            console.log("DRAW");
            updateScore("draw");
        }
        switchTurn();
    }
     
    const restartGame = () => {
        setGame(newGame());
        setTimeLeft(TURN_TIME);
    };

    return (
        <GameContext.Provider value={{ game, timeLeft, updateBoard, resetBoard, roundComplete, restartGame }}>
            {props.children}
        </GameContext.Provider>
    );
};