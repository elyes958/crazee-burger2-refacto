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
     border: none;        // retire la bordure noir de base sur l'input
     outline: none;       // retire la bordure noir au clic dans l'input
     margin-bottom: 18px;
     border-radius: 5px;
     padding: 18px 24px 18px 52px;
     width: 100%;
    }
`;
