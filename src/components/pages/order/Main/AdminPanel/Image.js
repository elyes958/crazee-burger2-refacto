import styled from "styled-components";
import { theme } from "../../../../../theme";


export default function Image({ image }) {
  return (
    <ImageStyled className={`${image ? "with-image" : ""}`}>
        {image ? <img src={image} alt="img" /> : "Aucune image" }
    </ImageStyled>
  )
}


const ImageStyled = styled.div`
    border: 1px solid ${theme.colors.greyLight};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.greySemiDark};

    &.with-image {
    border: none; /* classe qui Retire la bordure si une image est présente, qu'on a ajouter en plus de classe image sous conditions dans des */
   }

    img{
        max-width: 100%;  /* L'image ne dépasse pas la largeur du conteneur */
        max-height: 100%; /* L'image ne dépasse pas la hauteur du conteneur */
        object-fit: contain;
        object-position: center;
    }
`;
