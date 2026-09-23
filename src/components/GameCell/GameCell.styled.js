import styled from "styled-components";

export const CellStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    font-size: 3rem;
    border: none;
    border-radius: 10px;
    width: 7rem;
    height: 7rem;
    box-shadow: 3px 6px ${(props) => props.theme.colors.gray};
    cursor: pointer;
    padding: 2rem;

    svg {
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        fill: ${(props) => props.theme.colors.primary};
    }

    .markedItem {
        fill: ${(props) => props.theme.colors.primary};
    }

    .outlineIcon {
        path {
            stroke: ${(props) => props.theme.colors.primary};
            stroke-width: 0;
        }
    }
    
    &:hover {
        .outlineIcon {
            path {
                stroke-width: 4;
            }
        }
    }

`;
