import styled from "styled-components";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {
  // State
  const {isModeAdmin, selectTab} = useContext(OrderContext);

  // Affichage
  return (
    <MainStyled>
      <Menu/>
      {isModeAdmin && <AdminPanel selectTab={selectTab} />}
    </MainStyled>
  )
}


const MainStyled = styled.main`
    width: 1400px;
    height: 750px;
    position: relative;
`;
