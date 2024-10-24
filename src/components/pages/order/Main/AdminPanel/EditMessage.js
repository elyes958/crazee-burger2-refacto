import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../theme";

export default function EditMessage() {
  // Affichage
  return (
    <EditMessageStyled>
        <p>CLIQUER SUR UN PRODUIT POUR LE MODIFIER</p>
        <HiCursorClick />
    </EditMessageStyled>
  )
}

const EditMessageStyled = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  margin-top: 81px;
  margin-left: 71px;

  p{
    margin: 0px 9px 0px 0px;
    font-size: ${theme.fonts.P3};
    font-weight: ${theme.weights.regular};
    font-family: "Amatic SC", cursive;
    line-height: 30px;
    color: ${theme.colors.greyBlue};
  }
`;
