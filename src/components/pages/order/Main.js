import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
    <MainStyled></MainStyled>
  )
}


const MainStyled = styled.main`
    /* border: 1px solid green; */
    width: 1400px;
    height: 835px;
    background: ${theme.colors.white};
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
