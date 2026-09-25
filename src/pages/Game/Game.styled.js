import styled from "styled-components";

export const GameBoardStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin: 10px;
`

export const TurnTimer = styled.p`
    margin: 0;
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.25rem;
    font-family: 'Poppins', sans-serif;
`;