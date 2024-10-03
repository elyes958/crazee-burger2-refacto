import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";


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
     <br />
     <hr />
     <h2>Connectez-vous</h2>
     <div className="inputAndButton">
       <div>
           <input onChange={handleChange} value={inputValue} type="text" placeholder="Entrer votre prénom" required />
           <BsPersonCircle className="icon-person"/>
       </div>
       <div>
           <button>Accéder à mon espace</button>
           <IoChevronForward className="icon-chevron"/>
       </div>
     </div>
    </LoginFormStyled>
  )
}


const LoginFormStyled = styled.form`
  border: 1px solid red;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;

  
  h1{
    width: 310px;
    height: 61px;
    font-family: "Amatic Sc";
    font-size: ${theme.fonts.P5};
    font-weight: ${theme.weights.bold};
    line-height: 61px;
  }

  hr{
    width: 400px;
    height: 3px;
    border: 1px;
    background: #F56A2C;
  }

  h2{
    width: 171px;
    height: 46px;
    font-family: "Amatic Sc";
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
    line-height: 46px;
  }

  input{
    border-radius: 5px;
    padding: 18px 24px 18px 52px;
    width: 100%;
  }

  button{
    width: 400px;
    height: 53px;
    border: 1px #FF9F1B;
    border-radius: 5px;
    color: ${theme.colors.white};
    background: #FF9F1B;
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
    margin-left: 278px;
  }

  .icon-person{
    margin-left: 24px;
    color: ${theme.colors.greySemiDark};
  }
`;
