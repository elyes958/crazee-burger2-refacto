import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";

export default function AddToBasket({ image, title, price, quantity }) {
  return (
    <AddToBasketStyled>
        <img src={image} alt={title} />
        <div className="text-info">
            <div className="left-info">
                <span className="title">{title}</span>
                <span className="price">{formatPrice(price)}</span>
            </div>
            <span className="quantity">x {quantity}</span>
        </div>
    </AddToBasketStyled>
  )
}

const AddToBasketStyled = styled.div`
  width: 318px;
  height: 86px;
  margin-top: 20px;
  margin-left: 16px;
  background: #FFFFFF;
  box-shadow: -4px 4px 15px 0px #00000033;
  display: flex;
  border-radius: 5px;

  img{
    /* border: 1px solid green; */
    object-fit: contain;
    width: 85px;
    height: 70px;
    margin-top: 8px;
    margin-left: 16px;
  }

  .text-info{
    /* border: 2px solid black; */
    margin-top: 8px;
    padding: 0px 20px 0px 21px;
    display: flex;

    .quantity{
      font-size: 15px;
      font-weight: 400;
      font-family: "Open Sans";
      line-height: 20px;
      margin-top: 25px;
      margin-right: 20px;
      margin-left: 11px;
      color: #FFA01B;
    }
  }

  .left-info{
    padding: 5px 21px 8px 0px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;

    .title{
      font-size: 24px;
      font-weight: 700;
      font-family: "Amatic SC";
      line-height: 32px;
      color: #17161A;
      margin-bottom: 5px;
      white-space: nowrap;       
      overflow: hidden;          
      text-overflow: ellipsis;
    }

    .price{
      font-size: 15px;
      font-weight: 400;
      font-family: "Open Sans";
      line-height: 20px;
      color: #FFA01B;
    }
  }
`;