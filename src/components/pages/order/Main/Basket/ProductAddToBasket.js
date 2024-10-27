import styled from "styled-components";

export default function ProductAddToBasket() {
  return (
    <ProductAddToBasketStyled>
        <img src="" alt="" />
        <div className="text-info">
            <div className="left-info">
                <span></span>
                <span></span>
            </div>
            <span></span>
        </div>
    </ProductAddToBasketStyled>
  )
}

const ProductAddToBasketStyled = styled.div`
  width: 318px;
  height: 86px;
  margin-top: 20px;
  margin-left: 16px;
  background: #FFFFFF;
  box-shadow: -4px 4px 15px 0px #00000033;

  .text-info{
    margin-top: 8px;
    margin-left: 101px;
    padding: 0px 20px 0px 21px;
  }

  .left-info{
    padding: 5px 21px 8px 0px;
  }
`;