import styled from "styled-components";

export default function Total({ amountToPay }) {
  return (
    <TotalStyled>
        <div>
            <span className="total">TOTAL</span>
            <span className="price">{amountToPay}</span>
        </div>
    </TotalStyled>
  )
}

const TotalStyled = styled.div`
        /* border: 1px solid red; */
        width: 100%;
        height: 70px;
        /* padding: 0px 16px 0px 16px; */
        background: #292729;

       div{
         display: flex;
         justify-content: space-between;
         padding: 12px 2px 13px 0px;
       }

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
