import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EditFormInfoMesssage() {
  return (
    <EditFormInfoMesssageStyled>Cliquer sur un produit du menu pour le modifier <span>en temps réel</span></EditFormInfoMesssageStyled>
  )
}

const EditFormInfoMesssageStyled = styled.span`
        font-size: ${theme.fonts.SM};
        font-weight: ${theme.weights.regular};
        font-family: "Open Sans", cursive;
        line-height: 20px;
        color: #FFA01B;
        grid-area: 2 / 2 / 3 / 3;  // ma permis de le placer ou je voulais dans la grille
        margin-top: 15px;
        span{
            text-decoration: underline;
        }
`;
