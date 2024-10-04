import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";


export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  
  // comportement
  const handleSubmit = (event) => {
    event.preventDefault(); // il faut recharger la page pour vider le formulaire et donc l'input(non en faite je me suis tromper il faut synchroniser l'input avec la valeur du state(inputValue) pour faire cela !)
    navigate(`/OrderPage/${inputValue}`);
    setInputValue("");
  }
      
  const handleChange = (event) => {
    const userName =  event.target.value;
    // console.log(userName);
    setInputValue(userName);
  }

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
     <h1>Bienvenue chez nous !</h1>
     <hr />
     <h2>Connectez-vous</h2>
     <div className="inputAndButton">
       <TextInput 
         value={inputValue}
         onChange={handleChange} 
         Icon={<BsPersonCircle className="icon-person"/>}
         placeholder={"Entrer votre prénom"} 
         required 
       />
       <PrimaryButton 
         value={"Accéder à mon espace"}
         Icon={<IoChevronForward className="icon-chevron"/>}
       />
     </div>
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form`
  /* border: 1px solid red; */
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  
  h1{
    margin-top: 72px;
    width: 310px;
    height: 61px;
    font-family: "Amatic Sc", cursive;
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    line-height: 61px;
  }

  hr{
    margin: 0;
    width: 400px;
    height: 3px;
    border: 1px;
    background: #F56A2C;
  }

  h2{
    margin-top: 40px;
    margin-bottom: 18px;
    width: 171px;
    height: 46px;
    font-family: "Amatic Sc", cursive;
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    line-height: 46px;
  }

  .inputAndButton{
    display: flex;
    flex-direction: column;

    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;

      svg{
        position: absolute;
      }
    }
  }

  .icon-chevron{
    margin-top: 2px;
    margin-left: 5px;
  }

  .icon-person{
    margin-left: 24px;
    margin-bottom: 20px;
    color: ${theme.colors.greySemiDark};
  }
`;
