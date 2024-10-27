import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyBasket from "./EmptyBasket";
import { useState } from "react";


export default function BasketBody() {
  // State
  const [basket, setBasket] = useState([]);

  return (
    <BasketBodyStyled>
        <EmptyBasket/>
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    display: flex;
    align-items: center;
    justify-content: center;
`;
