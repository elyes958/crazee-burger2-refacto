import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Menu() {
  // State
  const [menu, setMenu] = useState(fakeMenu2);

    return (
        <MenuStyled>
          {menu.map((product) =>
            <div className="card" key={product.id}>
             <img src={product.imageSource} alt="img" />
             <div className="info">
                <div className="title">
                    <p>{product.title}</p>
                </div>
                <div className="priceAndButton">
                   <div className="price">
                      <p>{formatPrice(product.price)}</p>
                   </div>
                   <PrimaryButton value={"Ajouter"} className={"divbutton"} />
                </div>
              </div>
            </div>
        )}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
  /* border: 1px solid green; */
  width: 1400px;
    height: 835px;
    background: ${theme.colors.white};
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    box-sizing: border-box;
    padding: 50px 92px;

    display: grid;     // initialiser grid
    grid-template-columns:repeat(4, 240px);
    grid-template-rows: repeat(4, 330px);
    grid-row-gap: 60px;
    grid-column-gap: 85px;
    overflow: hidden;      // on cache tout ce qui depasse du container
    overflow-y: scroll;    // et avec cet propriete les card passe sous la navBar et  celle qui depasser tu container devienne visible au scroll et inclus dans le container */

  .card{
      /* border: 1px solid blue; */
      background: ${theme.colors.white};
      border-radius: 15px;
      box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
      padding: 20px 20px 10px 20px;

      img{
        width: 200px;
        height: 145px;
        object-fit: contain;     /* Empêche la déformation de l'image */
      }

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

      p{
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