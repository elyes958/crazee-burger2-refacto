import { useState } from "react";

export default function Login() {
    // state
    const [prenom, setPrenom] = useState("");
  
    // comportement
    const handleSubmit = (event) => {
      event.preventDefault(); // il faut recharger la page pour vider le formulaire et donc l'input(non en faite je me suis tromper il faut synchroniser l'input avec la valeur du state(prenom) pour faire cela !)
      // console.log(event);
      alert("Bonjour " + prenom);
      setPrenom("");
    }

    const handleChange = (event) => {
      const userName =  event.target.value;
      console.log(userName);
      setPrenom(userName);
    }
  
    // affichage
    return (
      <div>
          <h1>Bienvenue chez nous !</h1>
          <h3>Connectez-vous</h3>
          <form onSubmit={handleSubmit}>
              <input onChange={handleChange} value={prenom} type="text" placeholder="Entrer votre prénom..." required/>
              <button>Accéder à votre espace</button>
          </form>
      </div>
    )
}
