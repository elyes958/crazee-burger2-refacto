import styled from "styled-components";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminTab from "./AdminTab";
import AdminContent from "./AdminContent";


export default function AdminPanel() {
  // State
  const { displayPanel } = useContext(OrderContext); // on recupere displayPanel via le context sur le composant parent car quand le composant AdminPanel est demonter au clic quand on quitte le mode Admin  quand on le remonte il ce remet à true du coup il ne concerve pas le state quand on quitte et revient sur le mode admin par contre le composant parent n'est pas demonter et il conserve le state

  // Affichage
  return (
    <AdminPanelStyled>
        <AdminTab/>
        {displayPanel && <AdminContent/>}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
  /* border: 1px solid green; */
  width: 100%;
  /* height: 295px; ne pas mettre de height ici ça ma provoquer une erreur car quand tu fais disparaitre adminPanel le parent garde la meme hauteur, du coup admin Tab reste en haut et ne descend pas en bas ce qui laisse un espace vide */
  position: absolute;
  bottom: 0;     // Aligne AdminPanel en bas du conteneur Main(sans ça il ce met à la suite de main et depasse du container) 
  z-index: 1;   // Pour s’assurer qu'il se superpose au Menu
  
`;
