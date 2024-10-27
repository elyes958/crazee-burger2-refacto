import styled from "styled-components";
import { theme } from "../../../../../theme";

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
        background: ${theme.colors.background_dark};

       div{
         display: flex;
         justify-content: space-between;
         padding: 12px 2px 13px 0px;
       }

       .total{
         font-family: "Amatic SC";
         font-weight: ${theme.weights.regular};
         font-size: ${theme.fonts.P4};
         line-height: 45px;
         color: ${theme.colors.primary};
         margin-left: 16px;
       }
       .price{
         font-family: "Amatic SC";
         font-weight: ${theme.weights.bold};
         font-size: ${theme.fonts.P4};
         line-height: 45px;
         color: ${theme.colors.primary};
         margin-right: 16px;
       }
`;
