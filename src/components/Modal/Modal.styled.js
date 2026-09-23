import styled from "styled-components";

export const ModalBackdrop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 48px 20px;
    border-radius: 10px;
    margin: 0 auto;
    min-width: 480px;
    background: white;
    background-color: $(({ theme }) => theme.colors.secondary);
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: center;
`;

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
`;
