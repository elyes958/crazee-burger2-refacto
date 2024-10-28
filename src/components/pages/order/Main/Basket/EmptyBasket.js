import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
        <span>VOTRE COMMANDE EST VIDE.</span>
    </EmptyBasketStyled>
  )
}

const EmptyBasketStyled = styled.div`
    font-family: "Amatic SC";
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    line-height: 72px;
    color: ${theme.colors.greyBlue};
`;
