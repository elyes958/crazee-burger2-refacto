import styled from "styled-components";
import {theme} from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import AdminContext from "../../../context/AdminContext";
import { useState } from "react";


export default function OrderPage() {
  // State
  const [isModeAdmin, setIsModeAdmin] = useState(false);

  const AdminContextValue = {
    isModeAdmin: isModeAdmin,             // cle et valeur ont le meme nom donc on peu l'ecrire sans preciser la cle sinon il aurais fallu ecrire isModeAdmin: isModeAdmin
    setIsModeAdmin: setIsModeAdmin,
  };

  // affichage
  return (
    <OrderPageStyled>
      <AdminContext.Provider value={AdminContextValue}>
      <div className="container">
        <Navbar/>
        <Main/>
      </div>
      </AdminContext.Provider>
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
