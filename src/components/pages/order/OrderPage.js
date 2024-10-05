import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../../theme";
import LogoBurger from "../../reusable-ui/LogoBurger";
import { BsPersonCircle } from "react-icons/bs";


export default function OrderPage() {

  // state
  const { username } = useParams();    // useParams nous renvoie un objet dans app.js on a appler username la variable dans laquelle les parametre de l'url seront accepter(dans app.js sur la route) du coup useParams va recuperer ces parametre dans une variable qui aura ce meme nom, pour ça qu'on extrait cet variable de l'objet pour recuperer sa valeur regarde le clg tu verra mieux
  // const parametres = useParams();    
  // console.log(parametres);

  // affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <nav>
          <div className="left">
              <LogoBurger onClick={() => window.location.reload()} />
          </div>
          <div className="right">
            <div>
              <h1>Hey, <span>{username}</span></h1>
              <Link to={"/"}>
                <button >Se déconnecter</button>
              </Link>
            </div>
            <BsPersonCircle/>
          </div>
        </nav>
        <main></main>
      </div>
    </OrderPageStyled>
  )
}


const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  padding: 25px 56px 25px 56px;
  display: flex;
  justify-content: center;

  .container{
    /* border: 1px solid red; */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    nav{
      box-sizing: border-box;
      padding: 0 70px 0 20px;
      /* border: 1px solid blue; */
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      width: 1400px;
      height: 98px;
      background: ${theme.colors.white};
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .right{
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
     }

      svg{
        width: 36px;
        height: 36px;
        color: ${theme.colors.greySemiDark};
        margin-left: 10px;
      }
    }

    .left{
      cursor: pointer;

      div{
        h1{
          font-size: 36px;
          line-height: 46px;
        }

        img{
          width: 80px;
          height: 60px;
        }
      }
    }

    main{
      /* border: 1px solid green; */
      width: 1400px;
      height: 835px;
      background: ${theme.colors.white};
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
      background: #F5F5F7;
      box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    }
  }
`;
