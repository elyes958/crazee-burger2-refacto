import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({value, Icon, className, isSuccess, onClick, version = "normal"}) {
  return (
    <PrimaryButtonStyled className={className} version={version} onClick={onClick} >
        <button className={isSuccess && "successStyle"} >
            {value}
            {Icon && Icon}
        </button>
    </PrimaryButtonStyled>
  )
}


const PrimaryButtonStyled = styled.div`
    button{
     border-radius: ${theme.borderRadius.round};
     color: ${theme.colors.white};
  }

  ${(props) => extraStyle[props.version] }
`;

const extraNormalStyle = css`
  button {
    width: 400px;
    height: 53px;
    border: 1px #FF9F1B;
    background: #FF9F1B;

    &:hover{
       background: ${theme.colors.white};
       color: #FF9F1B;
       cursor: pointer;
     }

     &:active{
       color: ${theme.colors.white};
       background: #FF9F1B;
     }
  }
`

const extraSuccessStyle = css`
  button{
    height: 34px;
    margin-top: 12px;
    border-radius: ${theme.borderRadius.round};
    border: 1px;
    padding: 10px 29px 9px 29px;
    background: ${theme.colors.success};
    color: ${theme.colors.white};
    cursor: pointer;

    &.successStyle {
        background: ${theme.colors.white};
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success};
    }
 }
`

const extraStyle = {
  normal : extraNormalStyle,
  success : extraSuccessStyle,
}
