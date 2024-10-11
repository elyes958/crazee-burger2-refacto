import styled from "styled-components";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel/AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  // State
  const {isModeAdmin} = useContext(OrderContext);

  // Affichage
  return (
    <MainStyled>
      <Menu/>
      {isModeAdmin && <AdminPanel/>}
    </MainStyled>
  )
}


const MainStyled = styled.main`
    width: 1400px;
    height: 750px;
    position: relative;
`;
