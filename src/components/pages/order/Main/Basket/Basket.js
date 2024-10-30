import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketBody from "./BasketBody";


export default function Basket() {
  // State
  const { basket } = useContext(OrderContext);

  // Comportements
  const initialValue   = 0;
  const sumOfBasketProducts = basket.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity)
  , initialValue,);

  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(sumOfBasketProducts)} />
        {basket.length > 0  ? <BasketBody/> : <EmptyBasket />}
        <Footer/>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  overflow: hidden; // sur le parent puis overflow-y : scroll sur l'enfant
`;
