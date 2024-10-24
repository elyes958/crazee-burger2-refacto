import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
        <div className="total-price">
            <div>
                <span>TOTAL</span>
                <span>0,00 €</span>
            </div>
        </div>
        <span>VOTRE COMMANDE EST VIDE.</span>
        <div className="footer">
            <span>Codé avec ❤️ et React.JS</span>
        </div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  border: 1px solid blue;

  .total-price{
    border: 1px solid red;
  }

  .footer{
    border: 1px solid green;
  }
`;
