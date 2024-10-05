import styled from "styled-components";
import { theme } from "../../theme";

export default function LogoBurger( {onClick} ) {
  return (
    <LogoBurgerStyled onClick={onClick}>
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
    font-family: "Amatic SC", cursive;
    font-weight: ${theme.weights.bold};
    letter-spacing: 1.5px;
    line-height: 1em;
    text-transform: uppercase;
  }

  img{
    width: 200px;
    height: 150px;
    object-fit: contain;
    object-position: center;
  }
`;
