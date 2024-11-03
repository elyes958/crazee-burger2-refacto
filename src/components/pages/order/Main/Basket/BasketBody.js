import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import AddToBasket from "./AddToBasket";
import OrderContext from "../../../../../context/OrderContext";



export default function BasketBody() {
  // State
  const { basket, handleDeleteProductInBasket } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
        {basket.map((product) => 
            <AddToBasket
                key={product.id}
                image={product.imageSource}
                price={product.price}
                title={product.title}
                quantity={product.quantity}
                onClick={() => handleDeleteProductInBasket(product.id)}
            /> 
        )
        }
    </BasketBodyStyled>
  )
}

const BasketBodyStyled = styled.div`
    box-sizing: border-box;
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    overflow-y: scroll;
    // ces 2 propriete en dessous permette d'avoir la scrollbar invisible quand la souris n'est pas dessus
    scrollbar-color: transparent transparent;
    &:hover {
      scrollbar-color: initial;
    }
`;
