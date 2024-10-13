import styled from 'styled-components';
import { refreshPage } from '../../../../utils/window';
import { theme } from '../../../../theme';

export default function EmptyMenu({ isModeAdmin }) {

   // Comportements
  const handleClicked = () => {
    refreshPage();
  } 

  // Affichage  
  return (
    <EmptyMenuStyled>
        {isModeAdmin ? 
        <div className="emptyMenuAdmin">
            <p>LE MENU EST VIDE ?</p>
            <p>CLIQUEZ CI-DESSOUS POUR LE RENITIALISER</p>
            <button onClick={handleClicked} >Générer de nouveaux produits</button>
        </div>
        :
        <div className="emptyMenuClient">
            <p>VICTIME DE NOTRE SUCCES ! :D</p>
            <p>DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION</p>
            <p>A TRES VITE !</p>
        </div>
        }
    </EmptyMenuStyled>
  )
}


const EmptyMenuStyled = styled.div`
    width: 100%;
    height: 750px;
    background: ${theme.colors.white};
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background: #F5F5F7;
    box-shadow:${theme.shadows.strong};
    box-sizing: border-box;
    padding: 50px 92px;
    display: flex;
    justify-content: center;
    align-items: center;

  .emptyMenuAdmin{
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
   }

   .emptyMenuClient{
    font-family: "Amatic SC";
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P4};
    line-height: 45px;
    text-align: center;
    color: ${theme.colors.greyBlue};

    p{
        margin: 31px 0 31px 0;
    }
   }
`;
