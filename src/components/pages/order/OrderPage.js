import styled from "styled-components";
import {theme} from "../../../theme";
import Navbar from "./Navbar";
import Main from "./Main";


export default function OrderPage() {

  // affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar/>
        <Main/>
      </div>
    </OrderPageStyled>
  )
}


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  padding: 25px 56px 25px 56px;
  display: flex;
  justify-content: center;

  .container{
    /* border: 1px solid red; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
