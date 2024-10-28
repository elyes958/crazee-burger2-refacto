import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AddToBasket from "./AddToBasket";
import EmptyBasket from "./EmptyBasket";
import BasketBody from "./BasketBody";


export default function Basket() {
  // State
  const { basket } = useContext(OrderContext);

  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)} />
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
  overflow: hidden; // ne marche pas chez moi pour cacher ce qui depasse en bas à gauche du basket(à chercher)
`;
