import styled from "styled-components";
import { theme } from "../../theme";

export default function LogoBurger() {
  return (
    <LogoBurgerStyled>
      <h1>CRAZEE</h1>
      <img src="/images/burgerLogo.png" alt="logo" /> 
      <h1>BURGER</h1>
    </LogoBurgerStyled>
  )
}

const LogoBurgerStyled = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin: 0;
    color: ${theme.colors.primary};
    font-size: 100px;
    font-family: "Amatic SC";
    font-weight: ${theme.weights.bold};
    letter-spacing: 1.5px;
  }

  img{
    width: 200px;
    height: 150px;
    object-fit: contain;
    object-position: center;
  }
`;
