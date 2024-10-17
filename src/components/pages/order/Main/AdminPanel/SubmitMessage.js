import styled from "styled-components";
import { theme } from "../../../../../theme";
import { FiCheckCircle } from "react-icons/fi";


export default function SubmitMessage({ showSuccessMessage }) {
  return (
    <SubmitMessageStyled>
        {showSuccessMessage && <div className="succes-message" ><FiCheckCircle />Ajouté avec succès !</div>}
    </SubmitMessageStyled>
  )
}

const SubmitMessageStyled = styled.div`
  .succes-message{
    padding: 0px 2px 0px 10px;
    gap: 5px;
    font-family: "Open Sans", cursive;
    font-weight: ${theme.weights.regular};
    font-size: ${theme.fonts.SM};
    line-height: 20px;
    color: ${theme.colors.success};
    margin-top: 20px;

    svg{
        margin-right: 5px;
    }
 }
`;
