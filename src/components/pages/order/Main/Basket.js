import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
        <div className="total-price">
            <div>
                <span className="total">TOTAL</span>
                <span className="price">0,00 €</span>
            </div>
        </div>
        <span className="basket-empty">VOTRE COMMANDE EST VIDE.</span>
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

  .basket-empty{
    font-family: "Amatic SC";
    font-weight: 400;
    font-size: 36px;
    line-height: 72px;
    text-align: center;
    color: #747B91;
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
