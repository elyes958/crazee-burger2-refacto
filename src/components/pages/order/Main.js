import styled from "styled-components";
import { theme } from "../../../theme";

export default function Main() {
  return (
    <MainStyled>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </MainStyled>
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
    box-sizing: border-box;
    padding: 50px 92px;

    display: grid;     // initialiser grid
    grid-template-columns:repeat(4, 240px);
    grid-template-rows: repeat(4, 330px);
    grid-row-gap: 60px;
    grid-column-gap: 85px;

    div{
      border: 1px solid blue;
    }
`;
