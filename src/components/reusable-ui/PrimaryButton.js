import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({value, Icon}) {
  return (
    <PrimaryButtonStyled>
        <button>{value}</button>
        {Icon && Icon}
    </PrimaryButtonStyled>
  )
}


const PrimaryButtonStyled = styled.div`
    button{
     width: 400px;
     height: 53px;
     border: 1px #FF9F1B;
     border-radius: 5px;
     color: ${theme.colors.white};
     background: #FF9F1B;

     &:hover{
       background: ${theme.colors.white};
       color: #FF9F1B;
       cursor: pointer;
     }

     &:active{
       color: ${theme.colors.white};
       background: #FF9F1B;
     }
  }
`;