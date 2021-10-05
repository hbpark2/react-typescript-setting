import { createContext, useState } from "react";

type StoreProviderProp = {
  children: React.ReactNode;
};

type ValueType = {
  modal: boolean | undefined;
  modalState: string | undefined;
  onCloseModal: () => void | undefined;
  onOpenModal: () => void | undefined;
  onChangeModalState: (state: string) => void | undefined;
};

export const CurrentContext = createContext<ValueType>({
  modal: false,
  modalState: "",
  onCloseModal: () => {},
  onOpenModal: () => {},
  onChangeModalState: () => {},
});

export const StoreProvider: React.FC<StoreProviderProp> = ({ children }) => {
  const [modal, setModal] = useState<boolean | undefined>(false);
  const [modalState, setModalState] = useState<string | undefined>("");
  const onCloseModal = () => {
    setModal(false);
  };
  const onOpenModal = () => {
    setModal(true);
  };
  const onChangeModalState = (state: string) => {
    setModalState(state);
  };

  const value: ValueType = {
    modal,
    modalState,
    onCloseModal,
    onOpenModal,
    onChangeModalState,
  };

  return (
    <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
  );
};
