import styled from 'styled-components';
import { theme } from '../../../../theme';
import EmptyMenuAdmin from './EmptyMenuAdmin';
import EmptyMenuClient from './EmptyMenuClient';

export default function EmptyMenu({ isModeAdmin, handleResetMenu }) {

  // Affichage  
  return (
    <EmptyMenuStyled>
        {isModeAdmin ? 
        <EmptyMenuAdmin handleResetMenu={() => handleResetMenu()} />
        :
        <EmptyMenuClient/>
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
`;
