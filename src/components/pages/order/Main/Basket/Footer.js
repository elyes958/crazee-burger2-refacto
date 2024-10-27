import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
        <span>Codé avec ❤️ et React.JS</span>
    </FooterStyled>
  )
}

const FooterStyled = styled.div`
        /* border: 1px solid green; */
        background: #292729;
        border-bottom-left-radius: 15px;
        padding: 22px 75px 22px 75px;
        font-family: "Amatic SC", cursive;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        color: white;
`;
