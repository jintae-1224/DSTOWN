import styled from "styled-components";
import Human from "../human/Human";

const Main = ({ children }: any) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 600px;
  height: 500px;
  background-color: black;
  z-index: 5;
`;

export default Main;
