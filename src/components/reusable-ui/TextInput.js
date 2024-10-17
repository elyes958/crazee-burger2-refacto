import styled, { css } from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, type, name, placeholder, version = "normal", ...restProps }) {
    // console.log(restProps);  // objet qui contient tout le reste des props
    return (
        <TextInputStyled version={version} >
            {Icon && Icon}
            <input onChange={onChange} value={value} type={type} name={name} placeholder={placeholder} {...restProps} />
        </TextInputStyled>
    )
}


const TextInputStyled = styled.div`
    // ici ce qui est commun au style normal et minimalist, normal = l'input de base sur la page login et minimalist = les petit inputs dans le AddForm
    input{
     border: none;        // retire la bordure noir de base sur l'input
     outline: none;       // retire la bordure noir au clic dans l'input
     width: 100%;
    }

    /* ${(props) => (props.version === "normal" && extraNormalStyle)};
    ${(props) => (props.version === "minimalist" && extraMinimalistStyle)}; */

    //refacto en utilisant le dictionnaire
    ${(props) => extraStyle[props.version]}

`;
//ligne 25: pour pouvoir recuperer une props dans style-components il faut la passer au niveau du composant stylise comme ici ligne 7 


// et ici dans les variable le style qui differe
const extraNormalStyle = css`
    input{
        margin-bottom: 18px;
        border-radius: 5px;
        padding: 18px 24px 18px 52px;

        &::placeholder{      // c'est comme ça qu'on cible le placeholder
            background: ${theme.colors.white};
            color: ${theme.colors.greyLight};
        }
    }
`

const extraMinimalistStyle = css`
    input{
        padding: 1px 2px 1px 2px;
        margin-left: 13px;
        background-color: transparent;

        &::placeholder{
            background: ${theme.colors.background_white};
        }
    }
`

// notion de "dictionnaire" utiliser en entreprise
// le definir après les const extraNormalStyle et extraMinimalistStyle sinon erreur
const extraStyle = {
    normal: extraNormalStyle,
    minimalist: extraMinimalistStyle,
}
