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
        object-fit: contain;
        object-position: center;
        transform: scale(0.7);  // je reduit un peu la taille de l'image(inferieur à 1 reduit et superieur à 1 augmente)
    }
`;
