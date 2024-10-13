import styled from "styled-components";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";

export default function Main() {
  // State
  const {isModeAdmin, menu} = useContext(OrderContext);

  // Affichage
  return (
    <MainStyled>
      {menu.length > 0 ? <Menu/> : <EmptyMenu isModeAdmin={isModeAdmin} />}
      {isModeAdmin && <AdminPanel/>}
    </MainStyled>
  )
}


const MainStyled = styled.main`
    width: 1400px;
    height: 750px;
    position: relative;
`;
