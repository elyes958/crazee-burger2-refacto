import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
        Codé avec ❤️ et React.JS
    </FooterStyled>
  )
}

const FooterStyled = styled.span`
        font-family: "Amatic SC", cursive;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        color: white;
`;
