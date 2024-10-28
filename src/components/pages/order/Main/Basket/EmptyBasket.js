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
    box-sizing: border-box;
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Amatic SC";
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.P4};
    line-height: 72px;
    color: ${theme.colors.greyBlue};
`;
