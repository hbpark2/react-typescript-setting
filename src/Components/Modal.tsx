import styled from "styled-components";
import { useContext } from "react";
import { CurrentContext } from "../Context/ContextStore";

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.shadow_2};
  border-radius: 5px;
  z-index: 1;
`;
const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal: React.FC = ({ children }) => {
  const { onCloseModal } = useContext(CurrentContext);

  return (
    <>
      <Container>{children}</Container>
      <Layer onClick={onCloseModal} />
    </>
  );
};

export default Modal;
