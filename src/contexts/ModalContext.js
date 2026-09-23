import { createContext } from "react";
import { useModal } from "../hooks/useModal";
import ModalTemplate from "../components/Modal/ModalTemplate";

export const ModalContext = createContext({});

export function ModalContextProvider({children}) {
    const [modal, modalContext, handleModal] = useModal();

    return (
        <ModalContext.Provider value={{ modal, modalContext, handleModal }}>
            <ModalTemplate /> 
            {children}
        </ModalContext.Provider>
    )
}