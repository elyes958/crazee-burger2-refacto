import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminContent() {

  // State
  const { selectTab } = useContext(OrderContext); 


  // Affichage  
  return (
    <AdminContentStyled className="AdminContent">
        {selectTab === "add" && <span>Ajouter un produit</span> }
        {selectTab === "edit" && <span>Modifier un produit</span> }
    </AdminContentStyled>
  )
}


const AdminContentStyled = styled.div`
    border: 1px solid ${theme.colors.greyLight};
    width: 100%;
    height: 250px;
    background: ${theme.colors.white};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.subtle};

    span{
        font-size: ${theme.fonts.P0};
        font-weight: ${theme.weights.regular};
        line-height: 21px;
        margin-top: 17px;
        margin-left: 21px;
    }
`;
