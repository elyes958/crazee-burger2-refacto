import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...restProps }) {
    // console.log(restProps);  // objet qui contient tout le reste des props
    return (
        <TextInputStyled>
            <input onChange={onChange} value={value} type="text" {...restProps} />
            {Icon && Icon}
        </TextInputStyled>
    )
}


const TextInputStyled = styled.div`
    input{
     border: none;
     margin-bottom: 18px;
     border-radius: 5px;
     padding: 18px 24px 18px 52px;
     width: 100%;
    }
`;
