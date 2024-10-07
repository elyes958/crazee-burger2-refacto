import styled from "styled-components";
import { formatPrice } from "../../../../utils/maths";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { theme } from "../../../../theme";


export default function Product({ imageSource, title, price }) {
    return (
        <ProductStyled>
            <img src={imageSource} alt={title} />
            <div className="info">
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="priceAndButton">
                    <div className="price">
                        <p>{formatPrice(price)}</p>
                    </div>
                    <PrimaryButton value={"Ajouter"} className={"divbutton"} />
                </div>
            </div>
        </ProductStyled>
    )
}


const ProductStyled = styled.div`
    /* border: 1px solid blue; */
    background: ${theme.colors.white};
    border-radius: 15px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    padding: 20px 20px 10px 20px;

    img{
        /* margin-top: 10px; */
        width: 200px;
        height: 145px;
        object-fit: contain;     /* Empêche la déformation de l'image */
    }

    .info{
      margin-top: 20px;
      height: 110px;
    }

    .title{
      font-family: "Amatic SC", sans-serif;
      font-size: ${theme.fonts.P4};
      font-weight: ${theme.weights.bold};
      line-height: 45px;
      white-space: nowrap;       // evite le decalage quand le texte est trop long et qu'il ce met en desous à la ligne
      overflow: hidden;          // cache le texte qui depasse du container 
      text-overflow: ellipsis;   // affiche ... quand le texte du titre est trop long

      span{
        margin-top: 15px;
        margin-bottom: 0;
      }
    }

    .priceAndButton{
      display: flex;
      font-size: ${theme.fonts.P0};
      font-weight: ${theme.weights.regular};
      line-height: 22px;
      color: ${theme.colors.primary};
    }

    .price{
      padding: 22px 50px 22px 0px;
      display: flex;
      align-items: center;
      
      p{
        margin: 0;
      }
    }

    .divbutton{
      padding: 14px 0;

      button{
      padding: 18px 24px;
      width: 100%;
      font-size: ${theme.fonts.XS};
      font-family: 'Open Sans', sans-serif;
      font-weight: ${theme.weights.bold};
      line-height: 12px;
      transition: background-color 0.3s ease; /* Transition douce sur 0.3s */

      &:hover{
        border: 1px solid ${theme.colors.primary}; // la transition sera appliquer au survol ici
      }
      }
    }
`;
