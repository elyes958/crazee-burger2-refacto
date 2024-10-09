import styled from "styled-components";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel";
import { useContext } from "react";
import AdminContext from "../../../../context/AdminContext";

export default function Main() {
  // State
  const {isModeAdmin} = useContext(AdminContext);

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
    height: 835px;
    position: relative;
`;
