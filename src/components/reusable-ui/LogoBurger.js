import styled from "styled-components";
import { theme } from "../../theme";


export default function LogoBurger() {
  return (
    <LogoBurgerStyled>
      <h1>CRAZEE</h1>
      <h1>BURGER</h1>
    </LogoBurgerStyled>
  )
}

const LogoBurgerStyled = styled.div`
  border: 1px solid blue;
  color: ${theme.colors.primary};
`;
