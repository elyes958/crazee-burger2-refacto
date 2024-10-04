import styled from "styled-components";
import LoginForm from "./LoginForm";
import LogoBurger from "../../reusable-ui/LogoBurger";

export default function Login() {

  // affichage
  return (
    <LoginStyled>
      <LogoBurger/>
      <LoginForm/>
    </LoginStyled>
  )
}


const LoginStyled = styled.div`
  background: url("/images/backgroundLoginPage.jpg") rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;   // cet propriéte + le rgba(juste au dessus) pour avoir l'effet sombre de l'image en background
  background-size: cover;          /* Ajuste l'image pour couvrir tout l'élément */
  background-position: center;     /* Centrer l'image */
  background-repeat: no-repeat;    /* Empêche la répétition de l'image */
  height: 100vh;                   /* Prend toute la hauteur de la fenêtre contrairement à 100% qui prend toute la hauteur du parent */
  width: 100%;                     /* Prend toute la largeur */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
