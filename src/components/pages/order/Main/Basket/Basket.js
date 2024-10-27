import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import BasketBody from "./BasketBody";

export default function Basket() {
  return (
    <BasketStyled>
        <Total amountToPay={formatPrice(0)} />
        <BasketBody/>
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
