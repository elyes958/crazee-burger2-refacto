import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyMenuAdmin({ handleResetMenu }) {
  return (
    <EmptyMenuAdminStyled>
            <p>LE MENU EST VIDE ?</p>
            <p>CLIQUEZ CI-DESSOUS POUR LE RENITIALISER</p>
            <button onClick={handleResetMenu} >Générer de nouveaux produits</button>
    </EmptyMenuAdminStyled>
  )
}

const EmptyMenuAdminStyled = styled.div`
    font-family: "Amatic SC";
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P4};
    line-height: 45px;
    text-align: center;
    color: ${theme.colors.greyBlue};

    p{
        margin: 31px 0 31px 0;
    }

    button{
      border: 1px;
      border-radius: ${theme.borderRadius.round};
      padding: 19px 24px 19px 25px;
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
      cursor: pointer;
    }
`;
