import styled from "styled-components";
import { theme } from "../../../../../theme";


export default function BasketBody() {
  return (
    <BasketBodyStyled>
        <span>VOTRE COMMANDE EST VIDE.</span>
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Amatic SC";
    font-weight: 400;
    font-size: 36px;
    line-height: 72px;
    color: #747B91;
`;
