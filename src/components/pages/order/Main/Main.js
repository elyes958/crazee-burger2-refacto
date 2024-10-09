import styled from "styled-components";
import Menu from "./Menu";
import AdminPanel from "./AdminPanel";

export default function Main() {

  // Affichage
  return (
    <MainStyled>
      <Menu/>
      <AdminPanel/>
    </MainStyled>
  )
}


const MainStyled = styled.main`
    width: 1400px;
    height: 835px;
    position: relative;
`;
