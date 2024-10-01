import { Link, useParams } from "react-router-dom";


export default function OrderPage() {
  // state
  const { username } = useParams();    // useParams nous renvoie un objet dans app.js on a appler username la variable dans laquelle les parametre de l'url seront accepter(dans app.js sur la route) du coup useParams va recuperer ces parametre dans une variable qui aura ce meme nom, pour ça qu'on extrait cet variable de l'objet pour recuperer sa valeur regarde le clg tu verra mieux
  // const parametres = useParams();    
  // console.log(parametres);

  // affichage
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <Link to={"/"}>
        <button >Déconnexion</button>
      </Link>
    </div>
  )
}
