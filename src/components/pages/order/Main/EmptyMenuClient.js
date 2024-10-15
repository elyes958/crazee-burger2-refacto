import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
            <p>VICTIME DE NOTRE SUCCES ! :D</p>
            <p>DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION</p>
            <p>A TRES VITE !</p>
    </EmptyMenuClientStyled>
  )
}

const EmptyMenuClientStyled = styled.div`
    font-family: "Amatic SC";
    font-weight: ${theme.weights.bold};
    font-size: ${theme.fonts.P4};
    line-height: 45px;
    text-align: center;
    color: ${theme.colors.greyBlue};

    p{
        margin: 31px 0 31px 0;
    }
`;
