import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";


export default function NavbarRightSide() {
    // state
    const { username } = useParams();    // useParams nous renvoie un objet dans app.js on a appler username la variable dans laquelle les parametre de l'url seront accepter(dans app.js sur la route) du coup useParams va recuperer ces parametre dans une variable qui aura ce meme nom, pour ça qu'on extrait cet variable de l'objet pour recuperer sa valeur regarde le clg tu verra mieux
    // const parametres = useParams();    
    // console.log(parametres);

    // Affichage
    return (
        <NavbarRightSideStyled>
            <div>
                <h1>Hey, <span>{username}</span></h1>
                <Link to={"/"}>
                    <button >Se déconnecter</button>
                </Link>
            </div>
            <BsPersonCircle />
        </NavbarRightSideStyled>
    )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h1{
      margin: 0px;
      font-family: "Open Sans", cursive;
      font-size: 16px;
      font-weight: ${theme.weights.regular};
      line-height: 22px;
      text-align: right;
      color: #747B91;

      span{
        color: ${theme.colors.primary};
      }
    }

    button{
      border: none;
      padding: 0;
      background: none;
      cursor: pointer;
      font-family: 'Open Sans', cursive;
      font-weight: ${theme.weights.regular};
      font-size: ${theme.fonts.XXS};
      line-height: 14px;
      text-align: right;
      color: #747B91;
      &:hover{
        text-decoration: underline;
      }
    }

    svg{
        width: 36px;
        height: 36px;
        color: ${theme.colors.greySemiDark};
        margin-left: 10px;
    }
`;
