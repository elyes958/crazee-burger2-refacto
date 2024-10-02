import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { IoChevronForward } from "react-icons/io5";
// import { BsPersonCircle } from "react-icons/bs";


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
    <form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez-vous</h2>
    <input onChange={handleChange} value={inputValue} type="text" placeholder="Entrer votre prénom" required />
    <button>Accéder à mon espace</button>
  </form>
  )
}
