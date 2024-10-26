import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Basket() {
  return (
    <BasketStyled>
        <div className="total-price">
            <div>
                <span className="total">TOTAL</span>
                <span className="price">0,00 €</span>
            </div>
        </div>
        <div className="body">
          <span>VOTRE COMMANDE EST VIDE.</span>
        </div>
        <div className="footer">
            <span>Codé avec ❤️ et React.JS</span>
        </div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  overflow: hidden; // ne marche pas chez moi pour cacher ce qui depasse en bas à gauche du basket(à chercher)
  
  .total-price{
    /* border: 1px solid red; */
    width: 100%;
    height: 70px;
    /* padding: 0px 16px 0px 16px; */
    background: #292729;

    div{
       display: flex;
       justify-content: space-between;
       padding: 12px 2px 13px 0px;

       .total{
         font-family: "Amatic SC";
         font-weight: 400;
         font-size: 36px;
         line-height: 45px;
         color: #FFA01B;
         margin-left: 16px;
       }
       .price{
         font-family: "Amatic SC";
         font-weight: 700;
         font-size: 36px;
         line-height: 45px;
         color: #FFA01B;
         margin-right: 16px;
       }
    }
  }

  .body{ // si jamais ta besoin d'ajouter une div dans le span
    flex: 1;
    box-shadow: ${theme.shadows.basket};
    font-family: "Amatic SC";
    font-weight: 400;
    font-size: 36px;
    line-height: 72px;
    color: #747B91;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer{
    /* border: 1px solid green; */
    background: #292729;
    border-bottom-left-radius: 15px;
    padding: 22px 75px 22px 75px;
    span{
        font-family: "Amatic SC", cursive;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        color: white;
    }
  }
`;
