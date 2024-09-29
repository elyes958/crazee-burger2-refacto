import { useState } from "react";

export default function Login() {
    // state
    const [inputValue, setInputValue] = useState("");
  
    // comportement
    const handleSubmit = (event) => {
      event.preventDefault(); // il faut recharger la page pour vider le formulaire et donc l'input(non en faite je me suis tromper il faut synchroniser l'input avec la valeur du state(inputValue) pour faire cela !)
      // console.log(event);
      alert("Bonjour " + inputValue);
      setInputValue("");
    }
        
    const handleChange = (event) => {
      const userName =  event.target.value;
      // console.log(userName);
      setInputValue(userName);
    }
  
    // affichage
    return (
      <div>
          <h1>Bienvenue chez nous !</h1>
          <br />
          <h2>Connectez-vous</h2>
          <form action="submit" onSubmit={handleSubmit}>
              <input onChange={handleChange} value={inputValue} type="text" placeholder="Entrer votre prénom..." required/>
              <button>Accéder à votre espace</button>
          </form>
      </div>
    )
}
