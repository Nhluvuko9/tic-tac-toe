import styled from "styled-components";

export const CellStyle = styled.button`
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;
    border: none;
    border-radius: 10px;
    width: 7rem;
    height: 7rem;
    box-shadow: 3px 6px ${(props) => props.theme.colors.gray};
    cursor: pointer;
`