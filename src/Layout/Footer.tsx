import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.layout_bgcolor};
`;

const Footer = () => {
  return <Container></Container>;
};

export default Footer;
