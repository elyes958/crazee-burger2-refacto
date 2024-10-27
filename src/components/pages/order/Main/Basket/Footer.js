import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function Footer() {
  return (
    <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
        /* border: 1px solid green; */
        background: ${theme.colors.background_dark};
        border-bottom-left-radius: 15px;
        padding: 22px 75px 22px 75px;
        font-family: "Amatic SC", cursive;
        font-weight: ${theme.weights.bold};
        font-size: ${theme.fonts.P2};
        line-height: 25px;
        color: ${theme.colors.white};
`;
