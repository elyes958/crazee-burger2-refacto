import styled from "styled-components";
import {theme} from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { useState } from "react";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";


export default function OrderPage() {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [displayPanel, setDisplayPanel] = useState(true);
  const [selectTab, setSelectTab] = useState("add");
  const [menu, setMenu] = useState(fakeMenu2);


  const orderContextValue = {
    isModeAdmin: isModeAdmin,             // cle et valeur ont le meme nom donc on peu l'ecrire sans preciser la cle sinon il aurais fallu ecrire isModeAdmin: isModeAdmin
    setIsModeAdmin: setIsModeAdmin,

    displayPanel,
    setDisplayPanel,

    selectTab,
    setSelectTab,

    menu,
    setMenu,
  };

  // affichage
  return (
    <OrderContext.Provider value={orderContextValue}>
    <OrderPageStyled>
      <div className="container">
        <Navbar/>
        <Main/>
      </div>
    </OrderPageStyled>
    </OrderContext.Provider>
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
