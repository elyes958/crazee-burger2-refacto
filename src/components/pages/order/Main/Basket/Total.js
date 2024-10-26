import styled from "styled-components";

export default function Total({ amountToPay }) {
  return (
    <TotalStyled>
        <span className="total">TOTAL</span>
        <span className="price">{amountToPay}</span>
    </TotalStyled>
  )
}

const TotalStyled = styled.div`
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
`;
