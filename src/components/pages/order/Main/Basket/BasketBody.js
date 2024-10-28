import styled from "styled-components";
import { theme } from "../../../../../theme";
import EmptyBasket from "./EmptyBasket";
import { useContext, useState } from "react";
import AddToBasket from "./AddToBasket";
import OrderContext from "../../../../../context/OrderContext";



export default function BasketBody() {
  // State
  const { basket } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
        {basket.length > 0  ? 
        basket.map((product) => 
            <AddToBasket
                key={product.id}
                image={product.imageSource}
                price={product.price}
                title={product.title}
                quantity={product.quantity}
            /> 
        )
        : 
        <EmptyBasket
        />}
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
`;
