import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentContext } from "../Context/ContextStore";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px 0;
  /* background-color: ${(props) => props.theme.layout_bgcolor}; */
  box-shadow: ${(props) => props.theme.shadow_1};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 32px;
  font-weight: 900;
`;

const Navigation = styled.nav`
  max-width: 800px;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    width: 25%;
    text-align: center;
  }
`;

const NavBtn = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 20px 0;
`;

const Header = () => {
  const { onOpenModal, onChangeModalState } = useContext(CurrentContext);
  const onClickBtn = (state: string) => {
    onOpenModal();
    onChangeModalState(state);
  };

  return (
    <Container>
      <Title>MOTION</Title>
      <Navigation>
        <ul>
          <li>
            <NavBtn onClick={() => onClickBtn("IMAGE")}>Image</NavBtn>
          </li>
          <li>
            <NavBtn onClick={() => onClickBtn("VIDEO")}>Video</NavBtn>
          </li>
          <li>
            <NavBtn onClick={() => onClickBtn("NOTE")}>Note</NavBtn>
          </li>
          <li>
            <NavBtn onClick={() => onClickBtn("TODO")}>Todo</NavBtn>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Header;
