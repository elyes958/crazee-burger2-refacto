import styled from "styled-components";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import Basket from "./Basket/Basket";

export default function Main() {
  // State
  const {isModeAdmin, menu, handleResetMenu} = useContext(OrderContext);

  // Affichage
  return (
    <MainStyled>
      <Basket/>
      <div className="menu-and-admin">
        {menu.length > 0 ? <Menu/> : <EmptyMenu isModeAdmin={isModeAdmin} handleResetMenu={handleResetMenu} />}
        {isModeAdmin && <AdminPanel/>}
      </div>
    </MainStyled>
  )
}


const MainStyled = styled.main`
    width: 1400px;
    height: 750px;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr;
`;
