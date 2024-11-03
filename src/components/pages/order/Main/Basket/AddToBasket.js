import styled from "styled-components";
import { formatPrice } from "../../../../../utils/maths";
import { MdOutlineDeleteForever } from "react-icons/md";

export default function AddToBasket({ image, title, price, quantity, onClick }) {
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
         <div className="delete-button" onClick={onClick} ><MdOutlineDeleteForever /></div>
    </AddToBasketStyled>
  )
}

const AddToBasketStyled = styled.div`
  width: 280px;
  height: 86px;
  margin-top: 20px;
  /* margin-left: 16px; */
  background: #FFFFFF;
  box-shadow: -4px 4px 15px 0px #00000033;
  display: flex;
  border-radius: 5px;
  position: relative;

  img{
    /* border: 1px solid green; */
    object-fit: contain;
    width: 85px;
    height: 70px;
    margin-top: 8px;
    margin-left: 12px;
  }

  .text-info{
    /* border: 2px solid black; */
    margin-top: 8px;
    padding: 0px 5px 0px 5px;
    display: flex;

    .quantity{
      font-size: 15px;
      font-weight: 400;
      font-family: "Open Sans";
      line-height: 20px;
      margin-top: 25px;
      /* margin-right: 20px; */
      margin-left: 11px;
      color: #FFA01B;
    }
  }

  .left-info{
    /* border: 1px solid red; */
    padding: 5px 12px 8px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 119px;  // sans une propriete de largeur text-overflow: ellipsis ne peu pas fonctionner

    .title{
      font-size: 24px;
      font-weight: 700;
      font-family: "Amatic SC";
      line-height: 32px;
      color: #17161A;
      /* margin-bottom: 5px; */
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

  .delete-button{
    opacity: 0;
    left: 210px;   // position absolute a gauche et il ce place sur la quantite
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 76px;
    height: 100%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background: #E25549;
    svg{
      width: 24px;
      height: 24px;
      color: white;
    }

    &:hover{
      cursor: pointer;
      svg{
        color: black;
      }
    }

    &:active{
      svg{
        color: white;
      }
    }
  }

  &:hover .delete-button{
    opacity: 1;      // affiche/cache l'element
  }

  &:hover .quantity{
    opacity: 0;
  }
`;